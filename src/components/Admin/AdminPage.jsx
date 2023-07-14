import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, firestore } from "../../firebase/firebase.utils";

const AdminPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const checkAdminStatus = async () => {
            const currentUser = auth.currentUser;
            if (!currentUser) {
                history.push("/login");
                return;
            }
            const userRef = firestore.doc(`users/${currentUser.uid}`);
            const snapshot = await userRef.get();
            const user = snapshot.data();
            if (user.role === "admin") {
                setIsAdmin(true);
            } else {
                history.push("/login");
            }
        };
        checkAdminStatus();
    }, [history]);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            history.push("/login");
        } catch (error) {
            console.error(error);
            alert("Failed to sign out. Please try again.");
        }
    };

    return (
        <div>
            <h2>Admin Page</h2>
            {isAdmin ? (
                <div>
                    <p>Welcome, admin!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>You are not authorized to view this page.</p>
            )}
        </div>
    );
};

export default AdminPage;