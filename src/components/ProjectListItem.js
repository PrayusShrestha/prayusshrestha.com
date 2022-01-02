import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';

function ProjectListItem(props) {
    const {name, github_url, description,start, end} = props.data; 
    const [arrowDir, setArrowDir] = useState(-1);
    
    const handleClick = () => {
      setArrowDir(arrowDir * -1);
    }
  
  
    return (
        <div onClick={handleClick} className="border-2 p-2 hover:bg-zinc-300">
          <Disclosure>
            <Disclosure.Button className="py-2 w-full">
                <div className="inline float-left text-left"> 
                    {name}
                  <a className="pl-4" href={github_url} target="_blank" >
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <br></br>
                  
                </div>
                <div className="inline float-center">
                  <FontAwesomeIcon icon={arrowDir == -1 ? faArrowDown : faArrowUp}></FontAwesomeIcon>
                </div>
                <div className="inline float-right text-left"> 
                  <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>: {start} - {end ? end : "Present"}
                </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                {description}
            </Disclosure.Panel>
          </Disclosure>
        </div>
          
      );
}

export default ProjectListItem;