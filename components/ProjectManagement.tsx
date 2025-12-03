'use client';

import React, { useState } from 'react';
import {
  Network,
  GitBranch,
  Target,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Award,
  Zap,
  Calendar,
  DollarSign,
  Users,
  Shield,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { Card, Badge } from './ui/Layout';
import { EXPEDITION_DATA } from '@/data/expeditionData';

export const WBSTree: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['1.0', '1.1', '1.2']));

  const toggleNode = (id: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNodes(newExpanded);
  };

  const renderNode = (node: any, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const indent = level * 24;

    return (
      <div key={node.id}>
        <div
          className={`flex items-center gap-2 p-3 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-colors ${
            level === 1 ? 'bg-slate-900/50' : level === 2 ? 'bg-slate-900/30' : ''
          }`}
          style={{ marginLeft: `${indent}px` }}
          onClick={() => hasChildren && toggleNode(node.id)}
        >
          {hasChildren && (
            isExpanded ? <ChevronDown size={16} className="text-slate-500" /> : <ChevronRight size={16} className="text-slate-500" />
          )}
          {!hasChildren && <div className="w-4" />}
          
          <Badge color={level === 1 ? 'red' : level === 2 ? 'blue' : 'green'} className="text-xs">
            {node.id}
          </Badge>
          
          <div className="flex-1">
            <div className="font-semibold text-white">{node.name}</div>
            {node.description && <div className="text-xs text-slate-500 mt-1">{node.description}</div>}
            {node.responsible && (
              <div className="text-xs text-slate-400 mt-1">
                Responsible: {node.responsible}
              </div>
            )}
          </div>
          
          {node.deliverable && (
            <Badge color="purple" className="text-xs">{node.deliverable}</Badge>
          )}
          {node.duration && (
            <div className="text-xs text-slate-500">{node.duration}</div>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1">
            {node.children.map((child: any) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-2">
      {EXPEDITION_DATA.projectManagement.wbs.levels[0].children.map((node: any) => 
        renderNode(node, 1)
      )}
      <div className="mt-6 p-4 bg-slate-900/30 rounded-lg border border-slate-800">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-slate-500">Total Tasks</div>
            <div className="text-2xl font-bold text-white">{EXPEDITION_DATA.projectManagement.wbs.totalTasks}</div>
          </div>
          <div>
            <div className="text-slate-500">Total Duration</div>
            <div className="text-2xl font-bold text-white">{EXPEDITION_DATA.projectManagement.wbs.totalDuration}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GanttTimeline: React.FC = () => {
  const phases = EXPEDITION_DATA.projectManagement.ganttChart.phases;
  
  return (
    <div className="space-y-6">
      {phases.map((phase, idx) => (
        <div key={idx} className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Calendar size={18} className="text-blue-400" />
              {phase.phase}
            </h4>
            <Badge color="blue">{phase.duration} days</Badge>
          </div>
          
          <div className="space-y-2">
            {phase.tasks.map((task) => {
              const isCritical = EXPEDITION_DATA.projectManagement.ganttChart.criticalPath.includes(task.id);
              return (
                <div key={task.id} className={`p-3 rounded-lg border ${isCritical ? 'border-red-500/50 bg-red-950/20' : 'border-slate-800 bg-slate-900/30'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge color={isCritical ? 'red' : 'gray'} className="text-xs">{task.id}</Badge>
                      <span className="text-sm text-white">{task.name}</span>
                    </div>
                    <div className="text-xs text-slate-500">{task.responsible}</div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <div>Duration: {task.duration}d</div>
                    {task.dependencies.length > 0 && (
                      <div>Depends: {task.dependencies.join(', ')}</div>
                    )}
                    <div className="ml-auto">
                      <div className="w-24 bg-slate-800 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${isCritical ? 'bg-red-500' : 'bg-blue-500'}`}
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      
      <div className="p-4 bg-red-950/20 border border-red-500/50 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={18} className="text-red-400" />
          <h4 className="font-bold text-white">Critical Path</h4>
        </div>
        <div className="text-sm text-slate-300 mb-2">
          {EXPEDITION_DATA.projectManagement.ganttChart.criticalPath.length} critical tasks determine project duration
        </div>
        <div className="flex flex-wrap gap-2">
          {EXPEDITION_DATA.projectManagement.ganttChart.criticalPath.map((taskId) => (
            <Badge key={taskId} color="red" className="text-xs">{taskId}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PERTAnalysis: React.FC = () => {
  const data = EXPEDITION_DATA.projectManagement.pertCpm;
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-blue-950/20 border-blue-500/50">
          <div className="text-blue-400 text-sm mb-1">Optimistic</div>
          <div className="text-2xl font-bold text-white">{data.totalProjectDuration.optimistic} days</div>
        </Card>
        <Card className="bg-green-950/20 border-green-500/50">
          <div className="text-green-400 text-sm mb-1">Most Likely</div>
          <div className="text-2xl font-bold text-white">{data.totalProjectDuration.mostLikely} days</div>
        </Card>
        <Card className="bg-yellow-950/20 border-yellow-500/50">
          <div className="text-yellow-400 text-sm mb-1">Pessimistic</div>
          <div className="text-2xl font-bold text-white">{data.totalProjectDuration.pessimistic} days</div>
        </Card>
        <Card className="bg-purple-950/20 border-purple-500/50">
          <div className="text-purple-400 text-sm mb-1">Expected</div>
          <div className="text-2xl font-bold text-white">{data.totalProjectDuration.expected} days</div>
        </Card>
      </div>
      
      <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
          <Network size={18} className="text-purple-400" />
          Probability Analysis
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-slate-500">38 days</div>
            <div className="text-xl font-bold text-yellow-400">{data.probabilityAnalysis.completionIn38Days}</div>
          </div>
          <div>
            <div className="text-slate-500">41 days</div>
            <div className="text-xl font-bold text-green-400">{data.probabilityAnalysis.completionIn41Days}</div>
          </div>
          <div>
            <div className="text-slate-500">44 days</div>
            <div className="text-xl font-bold text-blue-400">{data.probabilityAnalysis.completionIn44Days}</div>
          </div>
          <div>
            <div className="text-slate-500">47 days</div>
            <div className="text-xl font-bold text-purple-400">{data.probabilityAnalysis.completionIn47Days}</div>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="font-bold text-white mb-3">Critical Activities (Zero Slack)</h4>
        <div className="grid gap-2">
          {data.slackAnalysis.filter(a => a.critical).map((activity) => (
            <div key={activity.activity} className="p-3 bg-red-950/20 border border-red-500/50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge color="red" className="text-xs">{activity.activity}</Badge>
                  <span className="text-sm text-white">
                    {data.activities.find(a => a.id === activity.activity)?.name}
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  ES: {activity.earlyStart} | LS: {activity.lateStart}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const KPIDashboard: React.FC = () => {
  const categories = EXPEDITION_DATA.projectManagement.kpis.categories;
  
  return (
    <div className="space-y-6">
      {categories.map((category, idx) => (
        <div key={idx} className="space-y-3">
          <h4 className="font-bold text-white text-lg flex items-center gap-2">
            {idx === 0 && <DollarSign size={18} className="text-green-400" />}
            {idx === 1 && <Calendar size={18} className="text-blue-400" />}
            {idx === 2 && <Shield size={18} className="text-red-400" />}
            {idx === 3 && <Award size={18} className="text-purple-400" />}
            {idx === 4 && <TrendingUp size={18} className="text-yellow-400" />}
            {category.category}
          </h4>
          
          <div className="grid gap-3">
            {category.indicators.map((kpi, kpiIdx) => (
              <Card key={kpiIdx} className="bg-slate-900/50 border-slate-800">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="font-semibold text-white">{kpi.name}</h5>
                    <div className="text-xs text-slate-500 mt-1">{kpi.measurement}</div>
                  </div>
                  <Badge 
                    color={kpi.currentStatus.includes('track') || kpi.currentStatus.includes('complete') ? 'green' : 'yellow'}
                    className="text-xs"
                  >
                    {kpi.currentStatus}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                  <div>
                    <div className="text-slate-500 text-xs">Target</div>
                    <div className="text-white font-semibold">{kpi.target}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">Responsible</div>
                    <div className="text-white font-semibold">{kpi.responsible}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
      
      <div className="p-6 bg-gradient-to-br from-green-950/30 to-blue-950/30 border border-green-500/30 rounded-lg">
        <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
          <Target size={20} className="text-green-400" />
          Overall Project Health
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-slate-400 text-sm">Status</div>
            <div className="text-xl font-bold text-green-400">{EXPEDITION_DATA.projectManagement.kpis.dashboard.overallProjectHealth}</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm">Progress</div>
            <div className="text-xl font-bold text-blue-400">{EXPEDITION_DATA.projectManagement.kpis.dashboard.completionPercentage}%</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm">Budget</div>
            <div className="text-xl font-bold text-green-400">{EXPEDITION_DATA.projectManagement.kpis.dashboard.budgetStatus}</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm">Schedule</div>
            <div className="text-xl font-bold text-green-400">{EXPEDITION_DATA.projectManagement.kpis.dashboard.scheduleStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ControlPointsTimeline: React.FC = () => {
  const checkpoints = EXPEDITION_DATA.projectManagement.controlPoints.checkpoints;
  
  return (
    <div className="space-y-4">
      {checkpoints.map((checkpoint, idx) => (
        <div key={checkpoint.id} className="relative pl-8 pb-8 border-l-2 border-slate-800 last:border-l-0 last:pb-0">
          <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 ${
            checkpoint.status === 'In Progress' ? 'bg-yellow-500 border-yellow-400' :
            checkpoint.status === 'Completed' ? 'bg-green-500 border-green-400' :
            'bg-slate-700 border-slate-600'
          }`} />
          
          <Card className="bg-slate-900/50 border-slate-800">
            <div className="flex items-start justify-between mb-3">
              <div>
                <Badge color="blue" className="text-xs mb-2">{checkpoint.id}</Badge>
                <h5 className="font-bold text-white text-lg">{checkpoint.name}</h5>
                <div className="text-sm text-slate-400 mt-1">{checkpoint.date}</div>
              </div>
              <Badge 
                color={
                  checkpoint.status === 'In Progress' ? 'yellow' :
                  checkpoint.status === 'Completed' ? 'green' :
                  'gray'
                }
              >
                {checkpoint.status}
              </Badge>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="text-xs text-slate-500 font-semibold">Success Criteria:</div>
              {checkpoint.criteria.map((criterion, cIdx) => (
                <div key={cIdx} className="flex items-start gap-2 text-sm">
                  <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{criterion}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800">
              <div className="text-slate-500">
                Responsible: <span className="text-white font-semibold">{checkpoint.responsible}</span>
              </div>
              {checkpoint.gateApproval && (
                <Badge color="purple" className="text-xs">{checkpoint.gateApproval}</Badge>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const VendorComparison: React.FC = () => {
  const categories = EXPEDITION_DATA.projectManagement.vendorAnalysis.categories;
  const [activeCategory, setActiveCategory] = useState(0);
  
  const category = categories[activeCategory];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(idx)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeCategory === idx
                ? 'bg-red-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>
      
      <div className="grid gap-4">
        {category.vendors.map((vendor, idx) => (
          <Card 
            key={idx}
            className={`${
              vendor.selected 
                ? 'bg-green-950/20 border-green-500/50' 
                : 'bg-slate-900/50 border-slate-800'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h5 className="font-bold text-white text-lg">{vendor.name}</h5>
                {vendor.selected && (
                  <Badge color="green" className="mt-2">✓ SELECTED</Badge>
                )}
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">{vendor.total}</div>
                <div className="text-xs text-slate-500">Overall Score</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
              {Object.entries(vendor.scores).map(([key, value]) => (
                <div key={key}>
                  <div className="text-xs text-slate-500 capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${value >= 90 ? 'bg-green-500' : value >= 75 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                    <div className="text-sm font-bold text-white w-8">{value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 text-sm">
              {Object.entries(vendor.details).map(([key, value]) => (
                <div key={key} className="flex items-start gap-2">
                  <div className="text-slate-500 min-w-24 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</div>
                  <div className="text-slate-300">{value as string}</div>
                </div>
              ))}
            </div>
            
            {vendor.selected && (
              <div className="mt-4 p-3 bg-green-950/30 border border-green-500/30 rounded-lg">
                <div className="text-xs text-green-400 font-semibold mb-1">Selection Reason:</div>
                <div className="text-sm text-slate-300">{vendor.reason}</div>
              </div>
            )}
          </Card>
        ))}
      </div>
      
      <Card className="bg-blue-950/20 border-blue-500/50">
        <h5 className="font-bold text-white mb-3">Decision Summary</h5>
        <p className="text-slate-300 text-sm">{category.decision}</p>
      </Card>
    </div>
  );
};
