import React from 'react';
import {View, TouchableHighlight} from 'react-native';

import {State, Store} from '@sambego/storybook-state';
import Container from '../components/Container';
import {storiesOf} from '../helpers/storiesOf';
import ProgressCircle from '../../src/ProgressCircle/ProgressCircle';

const store = new Store({
  value3: 30,
  visible2: true,
  circleValue3: 40,
});

storiesOf('ProgressCircle', module)
  .addParameters({jest: ['ProgressCircle']})

  .add('Indeterminate', () => (
    <Container>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40}}>
        <ProgressCircle />
        <ProgressCircle color={'#03A9F4'} />
        <ProgressCircle color={'#E91E63'} />
        <ProgressCircle color={'#009688'} />
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40}}>
        <ProgressCircle animationDuration={4800} />
        <ProgressCircle color={'#03A9F4'} animationDuration={4800} />
        <ProgressCircle color={'#E91E63'} animationDuration={4800} />
        <ProgressCircle color={'#009688'} animationDuration={4800} />
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40}}>
        <ProgressCircle animationDuration={1200} />
        <ProgressCircle color={'#03A9F4'} animationDuration={1200} />
        <ProgressCircle color={'#E91E63'} animationDuration={1200} />
        <ProgressCircle color={'#009688'} animationDuration={1200} />
      </View>
    </Container>
  ))
  .add('Determinate', () => (
    <Container>
      <State store={store} style={{flex: 1}}>
        {state => (
          <View style={{flexDirection: 'column', marginBottom: 40}}>
            <ProgressCircle
              value={state.circleValue3}
              size={48}
              thickness={4}
              color="#2b80ff"
              unfilledColor="#f2f2f2"
              animationMethod="timing"
              animationConfig={{speed: 1}}
              shouldAnimateFirstValue
              determinate
            />

            <TouchableHighlight
              type="outlined"
              style={{marginTop: 20}}
              text={'Change Value'}
              onPress={() => {
                store.set({
                  circleValue3: Math.floor(Math.random() * Math.floor(100)),
                });
              }}
            />
          </View>
        )}
      </State>
      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <ProgressCircle
          value={25}
          size={48}
          thickness={4}
          color="#E91E63"
          animationMethod="timing"
          animationConfig={{duration: 1000}}
          shouldAnimateFirstValue
          determinate
        />
        <ProgressCircle
          value={50}
          size={48}
          thickness={4}
          color="#E91E63"
          animationMethod="timing"
          animationConfig={{duration: 1000}}
          shouldAnimateFirstValue
          determinate
        />
        <ProgressCircle
          value={75}
          size={48}
          thickness={4}
          color="#E91E63"
          animationMethod="timing"
          animationConfig={{duration: 1000}}
          shouldAnimateFirstValue
          determinate
        />
        <ProgressCircle
          value={100}
          size={48}
          thickness={4}
          color="#E91E63"
          animationMethod="timing"
          animationConfig={{duration: 1000}}
          shouldAnimateFirstValue
          determinate
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <ProgressCircle
          value={25}
          size={48}
          thickness={8}
          color="#009688"
          animationMethod="timing"
          animationConfig={{duration: 1000}}
          shouldAnimateFirstValue
          determinate
        />
        <ProgressCircle
          value={50}
          size={48}
          thickness={8}
          color="#009688"
          animationMethod="timing"
          animationConfig={{duration: 1000}}
          shouldAnimateFirstValue
          determinate
        />
        <ProgressCircle
          value={75}
          size={48}
          thickness={8}
          color="#009688"
          animationMethod="timing"
          animationConfig={{duration: 1000}}
          shouldAnimateFirstValue
          determinate
        />
        <ProgressCircle
          value={100}
          size={48}
          thickness={8}
          color="#009688"
          animationMethod="timing"
          animationConfig={{duration: 1000}}
          shouldAnimateFirstValue
          determinate
        />
      </View>
    </Container>
  ));
