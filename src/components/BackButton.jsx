import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Button from './Button';

const BackButton = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/learnify/');
    };
  
    return (
      <Button type="button" className="btn p-0 m-0" onClick={handleClick}>
        <ArrowLeftIcon className="h-5 w-5 text-p-10" />
      </Button>
    );
  };
  
  export default BackButton;