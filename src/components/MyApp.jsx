import React from "react";

export const Header = () => {
  return <div>Header Component</div>;
};

const Footer = () => {
  return <div>Footer Component</div>;
};

const Navbar = () => {

  return <div>Navbar Component</div>;
};

const Content = () => {
  return <div>Content Component</div>;
};

const MyApp = () => {
    return (
        <>
        <Navbar />
        <Header />
        <Content />
        <Footer />
        </>
    );
}

export default MyApp;

