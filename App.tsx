import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Commands"
          component={CommandsScreen}
          options={{ title: 'Voice Commands' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }: any) {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleVoicePress = () => {
    setIsListening(true);
    setTranscript('Listening...');
    
    setTimeout(() => {
      setTranscript('Hello! I heard you say something.');
      setIsListening(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>ULTRON</Text>
          <Text style={styles.subtitle}>Voice Assistant</Text>
        </View>

        <View style={styles.orbContainer}>
          <View style={[styles.orb, isListening && styles.orbActive]} />
        </View>

        <View style={styles.transcriptBox}>
          <Text style={styles.transcriptText}>{transcript}</Text>
        </View>

        <TouchableOpacity
          style={[styles.voiceButton, isListening && styles.voiceButtonActive]}
          onPress={handleVoicePress}
          disabled={isListening}
        >
          <Text style={styles.voiceButtonText}>
            {isListening ? 'LISTENING...' : 'PRESS TO SPEAK'}
          </Text>
        </TouchableOpacity>

        <View style={styles.commandsGrid}>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickButtonText}>🔓 Unlock</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickButtonText}>🔒 Lock</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickButtonText}>📸 Screenshot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickButtonText}>🔋 Battery</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Commands')}
          >
            <Text style={styles.navButtonText}>Commands</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.navButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CommandsScreen() {
  const commands = [
    { voice: 'Hello', action: 'Greeting response' },
    { voice: 'Unlock', action: 'Unlock device' },
    { voice: 'Lock', action: 'Lock screen' },
    { voice: 'Screenshot', action: 'Take screenshot' },
    { voice: 'Battery', action: 'Check battery status' },
    { voice: 'Help', action: 'List all commands' },
    { voice: 'Flashlight on', action: 'Turn on flashlight' },
    { voice: 'Flashlight off', action: 'Turn off flashlight' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Available Voice Commands</Text>
        {commands.map((cmd, idx) => (
          <View key={idx} style={styles.commandItem}>
            <Text style={styles.commandVoice}>Say: "{cmd.voice}"</Text>
            <Text style={styles.commandAction}>→ {cmd.action}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  const [language, setLanguage] = useState('English');
  const [speed, setSpeed] = useState('Normal');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Settings</Text>

        <View style={styles.settingGroup}>
          <Text style={styles.settingLabel}>Language</Text>
          <View style={styles.settingButtons}>
            {['English', 'Spanish', 'French'].map((lang) => (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.settingButton,
                  language === lang && styles.settingButtonActive,
                ]}
                onPress={() => setLanguage(lang)}
              >
                <Text
                  style={[
                    styles.settingButtonText,
                    language === lang && styles.settingButtonTextActive,
                  ]}
                >
                  {lang}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.settingGroup}>
          <Text style={styles.settingLabel}>Speech Speed</Text>
          <View style={styles.settingButtons}>
            {['Slow', 'Normal', 'Fast'].map((s) => (
              <TouchableOpacity
                key={s}
                style={[
                  styles.settingButton,
                  speed === s && styles.settingButtonActive,
                ]}
                onPress={() => setSpeed(s)}
              >
                <Text
                  style={[
                    styles.settingButtonText,
                    speed === s && styles.settingButtonTextActive,
                  ]}
                >
                  {s}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            ULTRON v2.1.0
          </Text>
          <Text style={styles.infoText}>
            Voice Assistant for Android
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
  },
  content: {
    padding: 16,
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00d4ff',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#00d4ff',
    marginTop: 8,
    opacity: 0.7,
  },
  orbContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  orb: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#00d4ff',
    opacity: 0.3,
  },
  orbActive: {
    backgroundColor: '#00ff88',
    opacity: 0.6,
  },
  transcriptBox: {
    backgroundColor: '#1a1f3a',
    padding: 16,
    borderRadius: 8,
    marginVertical: 20,
    borderColor: '#00d4ff',
    borderWidth: 1,
    minHeight: 60,
    justifyContent: 'center',
  },
  transcriptText: {
    color: '#00d4ff',
    fontSize: 16,
    textAlign: 'center',
  },
  voiceButton: {
    backgroundColor: '#00d4ff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  voiceButtonActive: {
    backgroundColor: '#00ff88',
  },
  voiceButtonText: {
    color: '#0a0e27',
    fontSize: 18,
    fontWeight: 'bold',
  },
  commandsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  quickButton: {
    width: '48%',
    backgroundColor: '#1a1f3a',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#00d4ff',
    borderWidth: 1,
    alignItems: 'center',
  },
  quickButtonText: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  navButton: {
    backgroundColor: '#1a1f3a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderColor: '#00d4ff',
    borderWidth: 1,
  },
  navButtonText: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00d4ff',
    marginBottom: 16,
  },
  commandItem: {
    backgroundColor: '#1a1f3a',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftColor: '#00d4ff',
    borderLeftWidth: 3,
  },
  commandVoice: {
    color: '#00ff88',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  commandAction: {
    color: '#00d4ff',
    fontSize: 14,
  },
  settingGroup: {
    marginBottom: 24,
  },
  settingLabel: {
    color: '#00d4ff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  settingButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 6,
    backgroundColor: '#1a1f3a',
    borderColor: '#00d4ff',
    borderWidth: 1,
    alignItems: 'center',
  },
  settingButtonActive: {
    backgroundColor: '#00d4ff',
  },
  settingButtonText: {
    color: '#00d4ff',
    fontWeight: '600',
  },
  settingButtonTextActive: {
    color: '#0a0e27',
  },
  infoBox: {
    backgroundColor: '#1a1f3a',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    borderColor: '#00d4ff',
    borderWidth: 1,
    alignItems: 'center',
  },
  infoText: {
    color: '#00d4ff',
    fontSize: 14,
    marginVertical: 4,
  },
});
