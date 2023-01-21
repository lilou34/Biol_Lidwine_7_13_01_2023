import React, {useState, useRef} from 'react';
import Haut from '../../assets/images/Haut.webp';
import Bas from '../../assets/images/Bas.webp';
import css from './Collapse.module.scss'

const Collapse = (props) => {
    const [open, setOpen] = useState(false);
    const parentRef = useRef();
//eslint-disable-next-line
    return (
        <div className={css.collapse}>
      <span className={css.label}>
        <div className={css.toggle} onClick={() => 
        
        setOpen(!open)}>
          {props.label}
          
          {open === true ? (
             
            <img src={Haut} alt="flèche qui monte"  className={css.fleche}/>
          ) : (
            <img src={Bas} alt= "flèche qui descend" className={css.fleche}/>
          )}
        </div>
      </span>
      <div
        className={css.contentParent}
        ref={parentRef}
        style={
          open
            ? {
                height: parentRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }
      >
        <div className={css.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Collapse;