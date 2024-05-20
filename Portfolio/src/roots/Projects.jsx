import React from "react";

export const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
            <h3>Transmission Control Protocol Chat Room</h3>
            <p>
                Anna designed a scalable multiple client TCP chat room server
                leveraging Javas print writer and buffered reader classes to
                perform concurrent, bidirectional communication between clients
                • Utilized Java's server socket and executor service classes to
                create a server and a thread pool for concurrently handling
                client connections when joining the server and allowing real
                time communication between clients • Implemented functionality
                for a client to change names, leave the server and send
                messages, and functionality to broadcast these actions in real
                time to all connected clients with shutdown functions in place
                in case of exceptions
            </p>
            <h3>Static response chatbot</h3>
            <p>
                Anna developed a static response chatbot leveraging Pythons natural
                language toolkit and tensorflow machine learning library. She utilized natural language toolkit to parse and lemmatize user
                input to create a list of words appearing in user input and
                trained a five layer predictive model based on these words. This project
                implemented a one-hot encoding machine learning technique
                through tensorflow to predict user's intent based on input and
                output an response based on predictive model training
            </p>
            <h3>Course review CRUD application</h3>
            <p>Anna developed a CRUD application using SQLite that allowed students to register, review, waitlist and withdraw
                from courses. She built this desktop app using Java and JavaFX and used InHibernate to create a seamless way
                to interface with the SQLite database. 
            </p>
            <h3>Cryptocurrency projects</h3>
            <p>Anna has experience in solidity programming and bitcoin scripting language. She has implemented 
                decentralized exchanges, decentralized acutonomous orginizations, arbitrage cryptocurrency trading algorithms, NFT auction blockchain 
                applications, and numerous blockchain apps such as polls, gradebooks, and auctioneers, as well as basic websites for each project to provide 
                an easy way to interface with the blockcahin
            </p>
        </>
    );
};
