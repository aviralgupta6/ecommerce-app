import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

export default CartDropdown;
