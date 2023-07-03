import { format } from 'date-fns';

const CurrentDateAtom = () => {
  function getCurrentDate() {
    const date = new Date();
    const formattedDate = format(date, 'MMMM d, yyyy');

    return formattedDate;
  }

  const currentDate = getCurrentDate();

  return <p>Updated: {currentDate}</p>;
};

export default CurrentDateAtom;