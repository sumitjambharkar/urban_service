import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_title">
        <h2>Professional Cleaning <br/>Services Provider</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia sed <br/>deserunt mollit anim id est laborum mollit anim id est
          nulla.
        </p>
        <div className="contact_box">
            <div className="box">
                <CallIcon style={{color:"#f45d01"}}/>
                <h3>Phone</h3>
                <span>+917021595850</span>
            </div>
            <div className="box">
                 <EmailOutlinedIcon style={{color:"#f45d01"}}/>
                 <h3>Email</h3>
                 <span>cleannation00@gmail.com</span>
            </div>
            <div className="box">
                <AccessTimeOutlinedIcon style={{color:"#f45d01"}}/>
                <h3>Opening Hours</h3>
                <span>10.00 am to 08.00 pm</span>
            </div>
        </div>
      </div>
      <div className="contact_form">
       <form action="">
        <div className="form_group">
            <label htmlFor="">First name</label>
            <input type="text" />
        </div>
        <div className="form_group">
            <label htmlFor="">Last name</label>
            <input type="text" />
        </div>
        <div className="form_group">
            <label htmlFor="">Email Id</label>
            <input type="text" />
        </div>
        
            <button className="btn">Get Started</button>
       </form>
      </div>
    </div>
  );
};

export default Contact;
