import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'TechGuild - Home';
        break;
      case '/Services':
        document.title = 'TechGuild - Services';
        break;
      case '/Projects':
        document.title = 'TechGuild- Projects';
        break;
      case '/CaseStudy':
        document.title = 'TechGuild- CaseStudy';
        break;
      case '/About':
        document.title = 'TechGuild- About';
        break;
      case '/Careers':
        document.title = 'TechGuild- Careers';
        break;
      case '/Blogs':
        document.title = 'TechGuild- Blogs';
        break;
      case '/ContactUs':
        document.title = 'TechGuild- ContactUs';
        break;
      default:
        document.title = 'Tech Guild';
    }
  }, [location]);

  return null;
};

export default DynamicTitle;
