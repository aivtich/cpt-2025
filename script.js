async function saveTest() {
    const studentName = document.getElementById('studentName').value;
    const group = document.getElementById('group').value;
    
    if (!studentName || !group) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }
    
    try {
        const response = await fetch('/.netlify/functions/save-data', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                studentName: studentName, 
                group: group 
            })
        });
        
        const result = await response.json();
        alert('Данные успешно сохранены: ' + result.studentName + ', ' + result.group);
        console.log('Результат:', result);
        
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Ошибка при сохранении данных');
    }
}