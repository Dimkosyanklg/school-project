import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  East,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";
import React, { useState } from "react";
import * as s from "./main.styled";
import { CLASSES, THEMES } from "./consts";
import { useNavigate } from "react-router-dom";

type Props = {};

export const Main: React.FC<Props> = ({}) => {
  const [open, setOpen] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <s.Container elevation={5}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Темы по классам
          </ListSubheader>
        }
      >
        {CLASSES.map((classNumber) => (
          <React.Fragment key={classNumber}>
            <ListItemButton
              onClick={() => {
                setOpen((prevState) =>
                  prevState === classNumber ? null : classNumber
                );
              }}
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={`${classNumber} класс`} />
              {open === classNumber ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open === classNumber} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {THEMES?.[classNumber]?.map(({ name, url }) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate(url);
                    }}
                    key={url}
                  >
                    <ListItemIcon>
                      <East />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </s.Container>
  );
};
