import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { pagesLinks } from "./PageRouter";

const IconMenuRoot = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledMenu = styled(Menu)`
  position: absolute;
  z-index: 100;
`;

const StyledMenuIcon = styled(MdMenu)`
  width: 2.5rem;
  height: 2.5rem;
  color: #000000;
`;

function IconMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <IconMenuRoot>
      <Button onClick={handleClick}>
        <StyledMenuIcon />
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {pagesLinks.map((data)=>{
            return(
                <MenuItem onClick={handleClose}>
                <StyledLink to={data.link}>{data.name}</StyledLink>
              </MenuItem>
            )
        })}
      </StyledMenu>
    </IconMenuRoot>
  );
}

export default IconMenu;
