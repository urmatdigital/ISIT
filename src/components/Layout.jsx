import { useNavigate, Link, useLocation } from 'react-router-dom'
    import { supabase } from '../lib/supabaseClient'

    function Layout({ children }) {
      const navigate = useNavigate()
      const location = useLocation()

      const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate('/')
      }

      const menuItems = [
        { path: '/', label: '🏠 Главная' },
        { path: '/analytics', label: '📊 Аналитика' },
        { path: '/schedule', label: '📅 Расписание' },
        { path: '/grades', label: '📝 Оценки' },
        { path: '/library', label: '📚 Библиотека' },
        { path: '/news', label: '📰 Новости' },
      ]

      return (
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <span className="text-2xl font-bold text-blue-600">📚 ISIT TRUDIT</span>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {menuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`${
                          location.pathname === item.path
                            ? 'border-blue-500 text-gray-900'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    🚪 Выйти
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      )
    }

    export default Layout
