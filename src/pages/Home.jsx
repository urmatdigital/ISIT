function Home() {
      return (
        <div className="space-y-6">
          <div className="bg-white overflow-hidden shadow-xl rounded-lg">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                👋 Добро пожаловать в Электронный Журнал
              </h1>
              <p className="text-gray-600">
                Выберите нужный раздел в меню навигации выше
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-xl font-bold mb-4">📊 Последние оценки</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Математика</span>
                  <span className="font-bold">5 ⭐</span>
                </li>
                <li className="flex justify-between">
                  <span>Физика</span>
                  <span className="font-bold">4 ⭐</span>
                </li>
                <li className="flex justify-between">
                  <span>История</span>
                  <span className="font-bold">5 ⭐</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-xl font-bold mb-4">📅 Расписание на сегодня</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">📚</span> 1. Математика (8:30)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔬</span> 2. Физика (9:25)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📖</span> 3. История (10:20)
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-xl font-bold mb-4">📢 Объявления</h2>
              <div className="space-y-4">
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-sm">🎓 Родительское собрание в четверг в 18:00</p>
                </div>
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-sm">🏆 Школьная олимпиада по математике в субботу</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    export default Home
