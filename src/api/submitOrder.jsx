import axios from 'axios';

export const submitOrder = async (userInfo, productId) => {
    try {
        const response = await axios.post('https://e-shop-backend-ag4c.onrender.com/api/orders', {
            productId,
            userName: userInfo.fullName,
            userSurname:'Deer',
            userEmail: userInfo.email,
            userPhone: userInfo.phone,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data.success) {
            console.log('Order created successfully:', response.data);
            return true;
        } else {
            console.error('Unexpected response:', response.data);
            return false;
        }
    } catch (error) {
        console.error('Order failed:', error.response?.data || error.message);
        return false;
    }
};

export default submitOrder;

