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

type Props = {};

export const Main: React.FC<Props> = ({}) => {
  const [open, setOpen] = useState<number | null>(null);

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
          <>
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
                {THEMES?.[classNumber]?.map((theme) => (
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <East />
                    </ListItemIcon>
                    <ListItemText primary={theme.name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </s.Container>
  );
};
