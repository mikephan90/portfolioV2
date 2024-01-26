import {motion} from "framer-motion";

function Tab({isSelected, onSelect, children}: any) {
  return (
    <li>
      <button
        className={isSelected ? 'selected' : undefined}
        onClick={onSelect}
      >
        {children}
      </button>
      {isSelected && <motion.div layoutId="tab-indicator" className="active-tab-indicator"/>}
    </li>
  )
}

export default function MainNavigation({onSelect, selectedType}: any) {
  return (
    <div id="main-header">
      <motion.header whileHover={{scale: 1.02}} className="header-bar">
        <h1 onClick={() => onSelect()}>MIKE PHAN</h1>
      </motion.header>
      <menu id="tabs">
        <Tab isSelected={selectedType === 'about'} onSelect={() => onSelect('about')}>
          About
        </Tab>
        <Tab isSelected={selectedType === 'projects'} onSelect={() => onSelect('projects')}>
          Projects
        </Tab>
        <Tab isSelected={selectedType === 'experience'} onSelect={() => onSelect("experience")}>
          Experience
        </Tab>
        <Tab isSelected={selectedType === 'skills'} onSelect={() => onSelect("skills")}>
          Skills
        </Tab>
      </menu>
    </div>
  )
}