import React from "react";
import Button from "./Button";

const list = [
  { id: 1, title: "Taj Mahal", url: "https://youtu.be/JuCcugJEMEg?si=6uWOifiDdacE-5Z2" },
  { id: 2, title: "Eiffel Tower", url: "https://youtu.be/nbD8XYTw23Y?si=qIu439bvw2SHsmKz" },
  { id: 3, title: "Great Wall of China", url: "https://youtu.be/sWxSCf1Y0Xo?si=u1nqYz71AknLWdsT" },
  { id: 4, title: "Machu Picchu", url: "https://youtu.be/77hJtIrMJ7g?si=yj9KqjAeIgT4n0eM" },
  { id: 5, title: "Pyramids of Giza", url: "https://youtu.be/TMzouTzim0o?si=e66n-mwF9Xy1RiZQ" },
  { id: 6, title: "Colosseum", url: "https://youtu.be/Yn1DVpoNk1E?si=1_SHyAEl50YbJGxU" },
  { id: 7, title: "Petra", url: "https://youtu.be/zo0ghltFlP0?si=O5sWQuHOjciHRXuf" },
  { id: 8, title: "Stonehenge", url: "https://youtu.be/iaD4fSch2QU?si=R3A5J7r-zrtY__GU" },
  { id: 9, title: "Angkor Wat", url: "https://youtu.be/B8UzsVY1IE8?si=-kgcUKhBW_UQ8nZ0" },
  { id: 10, title: "Acropolis of Athens", url: "https://youtu.be/JV8TanJOx2Y?si=cKrZYNF3YQTitqX-" },
];

function handleButtonClick(url) {
  window.location.href = url;
}

const ButtonList = () => {
  const renderButtons = () => {
    return list.map(({ id, title, url }) => (
      <Button 
        key={id} 
        title={title} 
        onClick={() => handleButtonClick(url)} 
      />
    ));
  };

  return (
    <div className="  sticky top-[55px] bg-blue-50 rounded-lg  mr-4 flex overflow-x-scroll w-full text-sm z-10 sm:w-[calc(100vw - 20px)] sm:pl-20 justify-center ">
      <div className="flex justify-center gap-4">
        {renderButtons()}
      </div>
    </div>
  );
};

export default ButtonList;