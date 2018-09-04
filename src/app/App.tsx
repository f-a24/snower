import * as React from 'react';
import styled from 'styled-components';
import {
    mapper,
    StateHandler,
    StateHandlerMap,
    StateUpdaters,
    withStateHandlers,
} from 'recompose';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { stances, grabs, tricks } from './Trick';

const StyledListItem = styled(ListItem)`
  justify-content: space-between!important;
  align-content: center!important;
`;

type Outter = {};

type State = {
  stance: {
    name: string,
    fix: boolean
  },
  trick: {
    name: string,
    fix: boolean
  },
  grab: {
    name: string,
    fix: boolean
  },
  buttonText: string,
  interval: number
};

interface Updaters extends StateHandlerMap<State> {
    trickUpdate: StateHandler<State>;
}

type Props = Outter & State & Updaters;

const component: React.SFC<Props> = (props: Props) => (
  <List>
  {['stance', 'trick', 'grab'].map((t, i) => (
    <StyledListItem key={t}>
    <Select
      value={props[t].name}
      onChange={ e => props.trickUpdate({[t]: Object.assign({}, props[t], {name: e.target.value})}) }
    >
    { [stances, tricks, grabs][i].map(v => <MenuItem key={v} value={v}>{v}</MenuItem>) }
    </Select>
    <FormControlLabel
    control={
      <Checkbox
        onChange={ e => { props.trickUpdate({ [t]: { name: props[t].name, fix: e.target.checked } }) } } />
      }
    label="固定"
            />
    </StyledListItem>
    ))
  }
  <ListItem>
  <Button
    variant="contained"
    fullWidth
    onClick={(e) => {
      if(props.buttonText === "Let's Try!!"){
        props.trickUpdate({buttonText: 'STOP'});
        props.trickUpdate({
          interval: setInterval(() => {
            !props.stance.fix && props.trickUpdate({ stance: {name: stances[Math.floor(Math.random()*2)], fix: props.stance.fix}});
            !props.grab.fix && props.trickUpdate({ grab: {name: grabs[Math.floor(Math.random()*6)], fix: props.grab.fix}});
            !props.trick.fix && props.trickUpdate({ trick: {name: tricks[Math.floor(Math.random()*8)], fix: props.trick.fix}});
          },50)});
      } else {
        props.trickUpdate({buttonText: "Let's Try!!"});
        clearInterval(props.interval);
        alert(Object.keys(props).filter(k => k !== 'buttonText').map(k => props[k].name).join(''));
      }
    }}>
    {props.buttonText}
    </Button>
    </ListItem>
    </List>
    );

const createProps: mapper<Outter, State> = (): State => ({
  stance: {
    name: stances[0],
    fix: false
  },
  trick: {
    name: tricks[0],
    fix: false
  },
  grab: {
    name: grabs[0],
    fix: false
  },
  buttonText: "Let's Try!!",
  interval: 0
});

const stateUpdaters: StateUpdaters<Outter, State, Updaters> = {
  trickUpdate: (prev: State): StateHandler<State> => (
    (value): Partial<State> => value
  )};

export default withStateHandlers<State, Updaters, Outter>(
    createProps,
    stateUpdaters,
)(component);
