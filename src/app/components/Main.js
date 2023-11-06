import React from "react";
import BathtubIcon from '@mui/icons-material/Bathtub';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

const Main = () => {
  return (
    <>
      <section className="main">
        <div className="main_box">
          <div className="cirecle"><BathtubIcon/></div>
          <a href="">Best Best Quality</a>
          <p>Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus est suscipit et vitae nulla.</p>
        </div>
        <div className="main_box_blue">
          <div className="cirecle_main"><SettingsIcon/></div>
          <a href="">Expert Advice</a>
          <p>Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus est suscipit et vitae nulla.</p>
        </div>
        <div className="main_box">
          <div className="cirecle"><PeopleOutlineOutlinedIcon/></div>
          <a href="">Labour Expertise</a>
          <p>Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus est suscipit et vitae nulla.</p>
        </div>
      </section>
    </>
  );
};

export default Main;
