import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import React from "react";
// Components
// Types
import { Character } from "../App";

type Props = {
  character: Character;
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <Card
      sx={{
        width: 120,
      }}
    >
      <CardMedia
        sx={{
          height: 50,
        }}
        image={character.img_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Name: {character.name}
        </Typography>
        <Typography gutterBottom color="textSecondary">
          Hair: {character.hair}
          <br />
          Origin: {character.origin}
          <br />
          Species: {character.species}
          <br />
          Status: {character.status}
          <br />
          Alias:
          <br />
        </Typography>
        {character.alias.map((alias: any) => (
          <Chip key={alias} style={{ margin: 3 }} size="small" label={alias} />
        ))}
        <Typography color="textSecondary">Abilities:</Typography>
        {character.abilities.map((ability: any) => (
          <Chip
            key={ability}
            style={{ margin: 3 }}
            size="small"
            label={ability}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
