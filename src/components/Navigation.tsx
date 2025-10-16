import { Button } from "./ui/button";
import { Users, Menu, Bell } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">EmployeeHub</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">Employees</Link>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Performance</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Payroll</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Reports</a>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}