import { ArrowBack } from "@mui/icons-material";
import { List, ListSubheader } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./classPage.styled";
import { ClassPages } from "./ClassPages";

type Props = {};

export const ClassPage: React.FC<Props> = ({}) => {
  const { classNumber, themeNumber } = useParams();
  const test1 = classNumber as string;
  const test2 = themeNumber as string;

  const navigate = useNavigate();
  return (
    <s.Container elevation={5}>
      <div
        onClick={() => {
          navigate("/");
        }}
        style={{
          marginBottom: "15px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArrowBack />
        <span>Вернуться назад</span>
      </div>
      {ClassPages?.[test1]?.[test2] ?? null}
    </s.Container>
  );
};
