import classes from './UserDetails.module.css';

const UserDetails = (props) => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h3>Your First Name : {props.user.ufName}</h3>
        <h3>Your Last Name : {props.user.ulName}</h3>
        <h3>Your Age : {props.user.uage}</h3>
        <h3>Your Email : {props.user.uemail}</h3>
        <h3>
          Your Password : {props.user.upassword}
        </h3>
      </div>
    </section>
  );
}
export default UserDetails;