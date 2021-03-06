import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { CustomMenuItem } from "./CustomMenuItem";
import { useTheme } from "@mui/system";
import { CartButton } from "./CartButton";

const pages = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/category/sopro",
    name: "Sopro",
  },
  {
    path: "/percussao",
    name: "Percussão",
  },
  {
    path: "/corda",
    name: "Corda",
  },
  {
    path: "/acessorios",
    name: "Acessórios",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        [theme.breakpoints.down("md")]: {
          px: 2,
          pt: 2,
        },
      }}
    >
      <AppBar
        position="static"
        sx={{
          // backgroundColor: "secondary.light",
          // backgroundColor: "secondary.contrastText",
          backgroundColor: "#f8f8f8",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((p) => {
                return <CustomMenuItem key={p.path} to={p.path}>{p.name}</CustomMenuItem>;
              })}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: "secondary.dark",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  paper: {
                    backgroundColor: "secondary.light",
                  },
                  "& .MuiPaper-root": {
                    backgroundColor: "secondary.light",
                  },
                }}
              >
                {pages.map((p) => (
                  <MenuItem key={p.name} onClick={handleCloseNavMenu}>
                    {/* <Typography textAlign="center">{page.name}</Typography> */}
                    <CustomMenuItem size={30} to={p.path}>
                      {p.name}
                    </CustomMenuItem>
                  </MenuItem>
                ))}
              </Menu>
              <Box
                sx={{
                  flexGrow: 1,
                }}
              ></Box>
              <CartButton size={24} />
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              >
              <MenuIcon />
              </IconButton>
              <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                  display: { xs: "block", md: "none" },
                }}
            >
              {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
              ))}
              </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
              <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              >
              {page}
              </Button>
              ))}
              </Box>
              
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              >
              {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
              ))}
            </Menu>
        </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
