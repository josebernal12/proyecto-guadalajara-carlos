
const MainDashboard = () => {
  return (
    <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-10 ">
      <div className="grid gap-4 md:grid-cols-3 ">
        <div className="rounded-lg bg-blue-500 border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Leads</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Deals</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Tasks</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <path d="M14 19a6 6 0 0 0-12 0"></path>
              <circle cx="8" cy="9" r="4"></circle>
              <polyline points="16 11 18 13 22 9"></polyline>
            </svg>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Agregar Usuario</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <path d="M14 19a6 6 0 0 0-12 0"></path>
              <circle cx="8" cy="9" r="4"></circle>
              <polyline points="16 11 18 13 22 9"></polyline>
            </svg>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
          <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Recent Activity</h3>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
            View all
          </button>
        </div>
        <div className="p-0">
          <div className="border-t last:border-0">
            <ul className="divide-y">
              <li className="grid items-start py-4 grid-cols-[40px_1fr]">
                <div className="text-sm text-gray-500 dark:text-gray-400">10:23 AM</div>
                <div className="grid gap-1">
                  <h3 className="text-sm font-medium leading-none">Call with Acme Inc</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Follow up on the new contract</p>
                </div>
              </li>
              <li className="grid items-start py-4 grid-cols-[40px_1fr]">
                <div className="text-sm text-gray-500 dark:text-gray-400">11:45 AM</div>
                <div className="grid gap-1">
                  <h3 className="text-sm font-medium leading-none">Lunch with Clients</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Discuss the upcoming project</p>
                </div>
              </li>
              <li className="grid items-start py-4 grid-cols-[40px_1fr]">
                <div className="text-sm text-gray-500 dark:text-gray-400">02:10 PM</div>
                <div className="grid gap-1">
                  <h3 className="text-sm font-medium leading-none">Meeting with Team</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Review the progress</p>
                </div>
              </li>
              <li className="grid items-start py-4 grid-cols-[40px_1fr]">
                <div className="text-sm text-gray-500 dark:text-gray-400">04:30 PM</div>
                <div className="grid gap-1">
                  <h3 className="text-sm font-medium leading-none">Call with Clients</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Discuss the proposal</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainDashboard