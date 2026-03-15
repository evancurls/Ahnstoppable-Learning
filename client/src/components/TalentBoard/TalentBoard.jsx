import React, {useMemo} from "react";
import SectionHeading from "../SectionHeading";

function TalentBoard(){
    const students = [
        { id: 1, name: "Test 01", talents: 20},
        { id: 2, name: "Test 02", talents: 100},
        { id: 3, name: "Test 03", talents: 7},
        { id: 4, name: "Test 04", talents: 15},
    ];

    const sortedStudents = useMemo(() => {
    // We spread [...students] to create a shallow copy so we don't mutate the prop
    return [...students].sort((a, b) => b.talents - a.talents);
    }, [students]);

    const maxPoints = sortedStudents.length > 0 ? sortedStudents[0].talents : 0;

  return (
    <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
        <h2 className="text-lg font-bold std-text  flex items-center gap-2">
          <span>Top Contributors</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
            {students.length} Students
          </span>
        </h2>
        </div>
      {/* List */}
      <div className="p-4 space-y-6">
        {sortedStudents.map((student, index) => {
          // Calculate percentage relative to the leader
          const barWidth = maxPoints > 0 ? (student.talents / maxPoints) * 100 : 0;
          const isLeader = index === 0;

          return (
            <div key={student.id} className="relative group">
              <div className="flex items-center gap-4 mb-2">
                {/* Rank & Avatar */}
                <div className="relative">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400`}>
                    {student.name.charAt(0)}
                  </div>
                </div>

                {/* Name & Points */}
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-sm font-bold std-text dark:text-slate-100">
                      {student.name}
                    </span>
                    <span className="text-sm font-mono font-semibold text-blue-600 dark:text-blue-400">
                      {student.talents.toLocaleString()} Talents
                    </span>
                  </div>

                  {/* The Comparison Bar */}
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        isLeader ? 'bg-blue-600' : 'bg-blue-400/60 dark:bg-blue-500/40'
                      }`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TalentBoard;