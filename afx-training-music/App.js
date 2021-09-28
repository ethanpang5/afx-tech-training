/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Node from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

var Sound = require("react-native-sound");
Sound.setCategory("Playback");
var micDrop = new Sound('mic_drop.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log("loaded sound");
});


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [playing, setPlaying] = useState(false)
  // const [speed, setSpeed] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [loopStartTime, setLoopStart] = useState(0)
  const [loopEndTime, setLoopEnd] = useState(-1)
  const [shouldLoop, setShouldLoop] = useState(false)
  

  function play(audio) {
    console.log("playing")
    setPlaying(true)
    // Play the sound with an onEnd callback
    audio.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }

  function pause(audio) {
    console.log("paused")
    audio.pause()
    setPlaying(false)
  }

  function togglePlay(audio) {
    if (playing) {
      pause(audio)
    } else {
      play(audio)
    }
  }

  function restart(audio) {
    audio.stop(() => {
      console.log('restarted audio')
      setPlaying(false)
      setCurTime(audio, 0)
    });
  }

  // function 

  function jumpPrev15Seconds(audio) {
    console.log('move back 15')
    setCurTime(audio, Math.max(0, Number(currentTime) - 15))
  }

  function jumpNext15Seconds(audio) {
    console.log('move next 15')
    setCurTime(audio, Number(currentTime) + 15)
  }

  function setCurTime(audio, time) {
    audio.setCurrentTime(time)
    setCurrentTime(time)
  }

  function getCurTime(audio) {
    audio.getCurrentTime((seconds) => {
      setCurrentTime(seconds.toFixed(2))
      console.log('at ' + currentTime)
    })
    return currentTime
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
          <Section title="Mic Drop">
            <TouchableOpacity style={styles.button} onPress={() => togglePlay(micDrop)}>
              <Text>{(!playing && 'Play') || 'Pause'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => restart(micDrop)}>
              <Text>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => jumpPrev15Seconds(micDrop)}>
              <Text>-15s</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => jumpNext15Seconds(micDrop)}>
              <Text>+15s</Text>
            </TouchableOpacity>
          </Section>
          <Section >
            <TouchableOpacity style={styles.button}>
              <Text>Set Loop Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Set Loop End</Text>
            </TouchableOpacity>
          </Section>
          <Section >
            <Text>Playing: {playing.toString()}</Text>
          </Section>
          <Section>
            <Text>Time: {getCurTime(micDrop)}</Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    marginLeft: 10
  },
  input: {
    height: 40,
    margin: 12,
    color: '#DDDDDD',
  }
});

export default App;
