const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CountdownSchema = new mongoose.Schema({
  days: Number,
  hours: Number,
  minutes: Number,
  seconds: Number,
});

const Countdown = mongoose.model("Countdown", CountdownSchema);

// Function to decrease the countdown every second
const decrementCountdown = async () => {
  let countdown = await Countdown.findOne();

  if (!countdown) {
    countdown = await Countdown.create({
      days: 59,
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
  }

  if (
    countdown.days === 0 &&
    countdown.hours === 0 &&
    countdown.minutes === 0 &&
    countdown.seconds === 0
  ) {
    return; // Stop when countdown reaches zero
  }

  // Decrease time
  if (countdown.seconds > 0) {
    countdown.seconds--;
  } else {
    countdown.seconds = 59;

    if (countdown.minutes > 0) {
      countdown.minutes--;
    } else {
      countdown.minutes = 59;

      if (countdown.hours > 0) {
        countdown.hours--;
      } else {
        countdown.hours = 23;

        if (countdown.days > 0) {
          countdown.days--;
        }
      }
    }
  }

  await countdown.save();
};

setInterval(decrementCountdown, 1000);

app.get("/countdown", async (req, res) => {
  let countdown = await Countdown.findOne();
  if (!countdown) {
    countdown = await Countdown.create({
      days: 59,
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
  }
  res.json(countdown);
});

app.post("/countdown/update", async (req, res) => {
  try {
    await Countdown.updateOne(
      {},
      { days: 59, hours: 23, minutes: 59, seconds: 59 },
      { upsert: true }
    );
    res.json({ message: "Countdown updated" });
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
