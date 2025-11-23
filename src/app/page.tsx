import { tasks } from '@/data/tasks';
import { levelColors } from '@/data/levels';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function Page() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 tracking-tight">
          List of tasks
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <Link key={task.href} href={task.href} className="group">
              <Card className="transition-all duration-200 border-gray-200 hover:shadow-md hover:border-gray-300 group-hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-1">
                    <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                      {task.title}
                    </CardTitle>

                    <span
                      className={`px-2 py-1 text-xs rounded-md font-medium ${
                        levelColors[task.level]
                      }`}
                    >
                      {task.level}
                    </span>
                  </div>

                  <CardDescription>{task.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
