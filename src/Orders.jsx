import { useEffect, useState } from 'react';
import { db, auth } from './firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import './Orders.css';
import Order from './Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            // Listen for changes in the 'orders' collection for the current user
            const ordersQuery = query(
                collection(db, 'users', user.uid, 'orders'),
                orderBy('created', 'desc')
            );

            const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
                setOrders(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                );
            });

            // Unsubscribe from the Firestore listener when the component unmounts
            return () => unsubscribe();
        }
    }, [user]);

    if (!user) {
        return <p>Please sign in to view your orders.</p>;
    }

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            {orders.length > 0 ? (
                orders.map((order) => <Order key={order.id} order={order} />)
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default Orders;
