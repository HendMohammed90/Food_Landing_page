import React, { useState } from "react";
import Logo from "../../Assets/Logo.svg";
import Logo3 from "../../Assets/FLogo.png"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
            sectionId: "home",
        },
        {
            text: "About",
            icon: <InfoIcon />,
            sectionId: "about", 
        },
        {
            text: "Testimonials",
            icon: <CommentRoundedIcon />,
            sectionId: "testimonials", 
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
            sectionId: "contact", 
        },
    ];


    const handleItemClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 20,
                behavior: 'smooth',
            });
        }
    };

    const handleMenuOptionClick = (item) => {
        handleItemClick(item.sectionId);
    };

    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo3} alt="" />
            </div>
            <div className="navbar-links-container">
                {menuOptions.map((item, index) => (
                    <button key={index} className="navIcon" onClick={() => handleItemClick(item.sectionId)}>
                        {item.text}
                    </button>
                ))}

                <button className="primary-button">Bookings Now</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton onClick={() => handleMenuOptionClick(item)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default Header;
