import { View, Text, Button } from "react-native";
import { Camera } from "expo-camera";


// Capture page.
const HomePage = () => {
    return (
        <View>
            <Text>This is my application</Text>
        
            <Button
                title="Capture"
            />
        </View>
    )
}

export default HomePage;