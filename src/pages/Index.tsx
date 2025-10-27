import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const salesData = [
  { month: 1, value1: 200, value2: 150, value3: 100 },
  { month: 2, value1: 250, value2: 200, value3: 150 },
  { month: 3, value1: 300, value2: 250, value3: 200 },
  { month: 4, value1: 280, value2: 230, value3: 180 },
  { month: 5, value1: 350, value2: 300, value3: 250 },
  { month: 6, value1: 400, value2: 350, value3: 300 },
  { month: 7, value1: 450, value2: 400, value3: 350 },
  { month: 8, value1: 500, value2: 450, value3: 400 },
  { month: 9, value1: 550, value2: 500, value3: 450 },
  { month: 10, value1: 650, value2: 600, value3: 550 },
  { month: 11, value1: 800, value2: 750, value3: 700 },
  { month: 12, value1: 1000, value2: 900, value3: 800 },
];

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-[280px] bg-sidebar text-sidebar-foreground flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Rocket" size={24} className="text-white" />
          </div>
          <span className="font-bold text-xl">Byway</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground transition-colors">
            <Icon name="LayoutDashboard" size={20} />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
            <Icon name="BookOpen" size={20} />
            <span className="font-medium">Courses</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
            <Icon name="MessageSquare" size={20} />
            <span className="font-medium">Communication</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
            <Icon name="DollarSign" size={20} />
            <span className="font-medium">Revenue</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
            <Icon name="Settings" size={20} />
            <span className="font-medium">Setting</span>
          </a>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              HJ
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">Hi, John</p>
            </div>
            <Icon name="Menu" size={20} className="cursor-pointer" />
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Add Course
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-green-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">$1K</h3>
              <p className="text-sm text-muted-foreground">Life Time Course Commission</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">$800.0</h3>
              <p className="text-sm text-muted-foreground">Life Time Received Commission</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">$200.00</h3>
              <p className="text-sm text-muted-foreground">Life Time Pending Commission</p>
            </Card>
          </div>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Life Time Sales</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorValue3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Area type="monotone" dataKey="value1" stroke="#0EA5E9" fillOpacity={1} fill="url(#colorValue1)" strokeWidth={2} />
                <Area type="monotone" dataKey="value2" stroke="#10B981" fillOpacity={1} fill="url(#colorValue2)" strokeWidth={2} />
                <Area type="monotone" dataKey="value3" stroke="#F59E0B" fillOpacity={1} fill="url(#colorValue3)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Reviews</h2>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Total Reviews</p>
                <p className="text-4xl font-bold">1000</p>
              </div>
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm text-muted-foreground">{star} star reviews</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">100</p>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      star === 1 ? 'bg-red-100 text-red-700' :
                      star === 2 ? 'bg-orange-100 text-orange-700' :
                      star === 3 ? 'bg-yellow-100 text-yellow-700' :
                      star === 4 ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {star}★
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6">Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((course) => (
                <Card key={course} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 border-b">
                    <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary">
                      Free
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-4">Beginner's Guide to Design</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Price</p>
                        <p className="font-bold text-xl">$50.00</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Chapters</p>
                        <p className="font-bold text-xl">13</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Orders</p>
                        <p className="font-bold text-xl">254</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div>
                        <p className="font-bold text-lg">25</p>
                        <p className="text-xs text-muted-foreground">Certificates</p>
                      </div>
                      <div>
                        <p className="font-bold text-lg">25</p>
                        <p className="text-xs text-muted-foreground">Reviews</p>
                      </div>
                      <div>
                        <p className="font-bold text-lg">500</p>
                        <p className="text-xs text-muted-foreground">Added to Shelf</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
