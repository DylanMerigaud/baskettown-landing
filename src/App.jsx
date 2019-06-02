import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";

import ExpandLess from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

import AppProvider from "./providers/AppProvider";

import Product from "./components/Product";
import Home from "./components/Home";
import Team from "./components/Team";

const App = () => {
  const classes = useStyles();

  const [toTopVisible, setToTopVisible] = useState(0);

  const handleScroll = useCallback(e => {
    const bodyOffset = document.body.getBoundingClientRect();
    setToTopVisible(-bodyOffset.top > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={classes.root}>
      <AppProvider>
        <Home />

        <Product />

        <Team />

				<footer className={classes.footer}>© 2019 BasketTown Inc. | All Rights Reserved.</footer>
				{toTopVisible && (
					<IconButton className={classes.toTop} href="#landing">
						<ExpandLess className={classes.toTopIcon} />
					</IconButton>
				)}
			</AppProvider>
		</div>
	)
}

const useStyles = makeStyles({
  root: {},
  toTop: {
    position: "fixed",
    bottom: 16,
    right: 16,
    color: "rgba(255, 255, 255, 0.8)",
    "&:hover": {
      color: "white"
    }
  },
  footer: {
    background: "#1C2024",
    display: "flex",
    justifyContent: "center",
    height: 64,
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.8)"
  }
});

export default App;
