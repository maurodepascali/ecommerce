import "./Checkout.css";
import { Button } from '@material-ui/core';
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";

const Checkout = () => {
    const { createOrder } = useCartContext();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createOrder(formData.name, formData.phone, formData.email);
    };

    return (
        <div className="containerCheckout">
            <h2 className="titleCheckout">COMPLETE SUS DATOS</h2>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Teléfono"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="form-control"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="buttonCheckout">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Finalizar compra
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;