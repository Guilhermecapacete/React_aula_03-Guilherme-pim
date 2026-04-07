import React , { useState } from 'react';
import {View ,Text ,TextInput ,Button, FlatList ,StyleSheet} from 'react-native';
export default function App () {
const [tarefa, setTarefa ] = useState('');
const [lista, setLista ] = useState([]);

function adicionarTarefa() {
if (tarefa !== '') {
setLista([...lista, {id: Date.now().toString(), nome:tarefa }]);
setTarefa('');
}
}

function excluirTarefa(id) {
    setLista(lista => lista.filter(item => item.id !== id));
}

return (
<View style={styles.container}>

<TextInput
style={styles.input}
placeholder="Digite uma tarefa"
value ={tarefa}
onChangeText={setTarefa}
/>
<Button title="Adicionar" onPress={adicionarTarefa} />

<FlatList
data={lista}
keyExtractor={(item) => item.id}
renderItem={({item}) => (
<View class="tarefas">
<Text style={styles.item}> {item.nome}</Text>
<Button title="Excluir" onPress={() => excluirTarefa(item.id)} />
</View>
)}
/>
</View>
);
}

const styles = StyleSheet.create ({
container: {
flex:1,
padding: 20,
},
input: {
borderWidth:1,
marginBottom: 10,
padding: 10,
},
item: {
color: "#34eb52",
fontSize: 18,
marginTop: 10,
},
});

