'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {
  Mountain,
  MapPin,
  Users,
  Car,
  Navigation,
  Clock,
  ThermometerSnowflake,
  Wallet,
  ShieldAlert,
  ChevronDown,
  ArrowRight,
  Calendar,
  Network,
  GitBranch,
  Target,
  Phone,
  Mail,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Snowflake,
  MapPinned,
  Sparkles,
  Tent,
  Route,
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Section, Card, Badge } from '@/components/ui/Layout';
import { CountdownTimer } from '@/components/CountdownTimer';
import { EXPEDITION_DATA } from '@/data/expeditionData';
import { IMAGES } from '@/data/images';

// Dynamic imports for heavy components
const BudgetCalculator = dynamic(() => import('@/components/BudgetCalculator').then(mod => ({ default: mod.BudgetCalculator })), { ssr: false });
const BudgetDonutChart = dynamic(() => import('@/components/Charts').then(mod => ({ default: mod.BudgetDonutChart })), { ssr: false });
const RiskHeatmapChart = dynamic(() => import('@/components/Charts').then(mod => ({ default: mod.RiskHeatmapChart })), { ssr: false });
const ResortComparisonChart = dynamic(() => import('@/components/Charts').then(mod => ({ default: mod.ResortComparisonChart })), { ssr: false });
const WeatherWidget = dynamic(() => import('@/components/WeatherWidget').then(mod => ({ default: mod.WeatherWidget })), { ssr: false });
const TimelineGantt = dynamic(() => import('@/components/TimelineGantt').then(mod => ({ default: mod.TimelineGantt })), { ssr: false });
const ElevationProfile = dynamic(() => import('@/components/ElevationProfile').then(mod => ({ default: mod.ElevationProfile })), { ssr: false });
const RiskMatrix2D = dynamic(() => import('@/components/RiskMatrix2D').then(mod => ({ default: mod.RiskMatrix2D })), { ssr: false });
const PhotoGallery = dynamic(() => import('@/components/PhotoGallery').then(mod => ({ default: mod.PhotoGallery })), { ssr: false });
const PackingList = dynamic(() => import('@/components/PackingList').then(mod => ({ default: mod.PackingList })), { ssr: false });
const AchievementBadges = dynamic(() => import('@/components/AchievementBadges').then(mod => ({ default: mod.AchievementBadges })), { ssr: false });
const ComparisonSlider = dynamic(() => import('@/components/ComparisonSlider').then(mod => ({ default: mod.ComparisonSlider })), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => ({ default: mod.Testimonials })), { ssr: false });
const ProgressTracker = dynamic(() => import('@/components/ProgressTracker').then(mod => ({ default: mod.ProgressTracker })), { ssr: false });
const WBSTree = dynamic(() => import('@/components/ProjectManagement').then(mod => ({ default: mod.WBSTree })), { ssr: false });
const GanttTimeline = dynamic(() => import('@/components/ProjectManagement').then(mod => ({ default: mod.GanttTimeline })), { ssr: false });
const PERTAnalysis = dynamic(() => import('@/components/ProjectManagement').then(mod => ({ default: mod.PERTAnalysis })), { ssr: false });
const KPIDashboard = dynamic(() => import('@/components/ProjectManagement').then(mod => ({ default: mod.KPIDashboard })), { ssr: false });
const ControlPointsTimeline = dynamic(() => import('@/components/ProjectManagement').then(mod => ({ default: mod.ControlPointsTimeline })), { ssr: false });
const VendorComparison = dynamic(() => import('@/components/ProjectManagement').then(mod => ({ default: mod.VendorComparison })), { ssr: false });

export default function Home() {
  const [activeTab, setActiveTab] = useState<'route' | 'daily'>('route');
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <main className="min-h-screen">
      <Navbar />
      <AchievementBadges />
      <ProgressTracker />

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.main}
            alt="St. Anton am Arlberg Winter Expedition - Mountain Lighthouse"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-red-900/20" />
          {/* Animated gradient accents */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-900/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
          <Badge color="white">{EXPEDITION_DATA.project.code}</Badge>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mt-6 mb-6 leading-tight tracking-tight animate-slide-up">
            ST. ANTON AM ARLBERG <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              SKI RESORT
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 font-light mb-10">
            {EXPEDITION_DATA.project.tagline}
          </p>

          <CountdownTimer />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="#logistics"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/30"
            >
              View Itinerary <ArrowRight size={18} />
            </a>
            <div className="px-8 py-4 glass border border-slate-700 rounded-lg text-slate-300 flex items-center justify-center gap-2">
              <MapPin size={18} /> {EXPEDITION_DATA.project.destination.split(',')[0]}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown />
        </div>
      </div>

      {/* MISSION & IDENTITY SECTION */}
      <Section id="mission" className="scroll-mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color="red">PROJECT IDENTITY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              Premium Alpine Experience, <span className="text-red-500">Smart Budget</span>
            </h2>
            <p className="text-base text-slate-400 leading-relaxed mb-6">
              Our mission: Execute a self-managed, high-comfort ski expedition to {EXPEDITION_DATA.project.destination.split(',')[0]} for 4 people, achieving luxury-level experiences at 15.8% below market rates through strategic logistics and smart planning.
            </p>

            {/* St. Anton Village Image */}
            <div className="relative h-64 rounded-xl overflow-hidden mb-6 shadow-2xl">
              <Image
                src={IMAGES.stAnton.village}
                alt="St. Anton am Arlberg Village"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <div className="flex items-center gap-2 text-white">
                    <MapPinned size={20} className="text-red-500" />
                    <span className="font-bold">St. Anton am Arlberg, Austria</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">Altitude: 1,304m | Summit: 2,811m (Valluga)</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <Sparkles size={28} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Expedition Dates</div>
                  <div className="text-white font-bold">
                    {EXPEDITION_DATA.project.dates.start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} – {EXPEDITION_DATA.project.dates.end.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-red-900/30 flex items-center justify-center text-red-400">
                  <ThermometerSnowflake size={28} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Season & Conditions</div>
                  <div className="text-white font-medium">
                    Peak winter - {EXPEDITION_DATA.weather.february.snowfall.average} expected snowfall
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center py-8 bg-gradient-to-br from-blue-900/20 to-transparent hover:from-blue-900/30 transition-all">
              <div className="text-4xl font-bold text-white mb-2">
                {EXPEDITION_DATA.logistics.route.totalDistance}
                <span className="text-red-500 text-lg ml-1">km</span>
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">Total Distance</div>
            </Card>

            <Card className="text-center py-8 bg-gradient-to-br from-red-900/20 to-transparent hover:from-red-900/30 transition-all">
              <div className="text-4xl font-bold text-white mb-2">
                {EXPEDITION_DATA.team.length}
                <span className="text-blue-500 text-lg ml-1">pax</span>
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">Team Members</div>
            </Card>

            <Card className="text-center py-8 col-span-2 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30 hover:from-green-900/30 transition-all">
              <div className="text-4xl font-bold text-white mb-2">
                {EXPEDITION_DATA.budget.comparison.savingsPercent}
                <span className="text-green-500 text-lg ml-1">%</span>
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">ROI vs Travel Agency</div>
              <div className="text-xs text-green-400 mt-2">
                Saving €{EXPEDITION_DATA.budget.comparison.savings} per person
              </div>
            </Card>

            <Card className="text-center py-8 col-span-2 bg-gradient-to-r from-purple-900/20 to-violet-900/20 hover:from-purple-900/30 transition-all">
              <div className="text-3xl font-bold text-white mb-2">
                {EXPEDITION_DATA.activities.skiPass.coverage.totalSlopes}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">Ski Area Coverage</div>
              <div className="text-xs text-purple-400 mt-2">
                {EXPEDITION_DATA.activities.skiPass.coverage.lifts} lifts across 3 regions
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* TEAM SECTION */}
      <Section id="team" className="glass rounded-3xl my-10 border border-slate-800 scroll-mt-20">
        <div className="text-center mb-8">
          <Badge color="red">RACI MATRIX</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Command Structure</h2>
          <p className="text-slate-400 mt-2 text-sm max-w-2xl mx-auto">
            Clear role assignments ensure accountability across logistics, navigation, finance, and stakeholder management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXPEDITION_DATA.team.map((member) => {
            const colorMap: { [key: string]: string } = {
              red: 'from-red-900/40 to-red-800/20 border-red-500/30',
              blue: 'from-blue-900/40 to-blue-800/20 border-blue-500/30',
              green: 'from-green-900/40 to-green-800/20 border-green-500/30',
              purple: 'from-purple-900/40 to-purple-800/20 border-purple-500/30',
            };

            const textColor: { [key: string]: string } = {
              red: 'text-red-400',
              blue: 'text-blue-400',
              green: 'text-green-400',
              purple: 'text-purple-400',
            };

            return (
              <Card
                key={member.id}
                className={`hover:-translate-y-2 transition-transform bg-gradient-to-br ${colorMap[member.color]} border`}
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-4 text-white text-2xl font-bold shadow-lg overflow-hidden relative">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  ) : (
                    member.initial
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className={`text-xs font-bold mb-3 uppercase tracking-wide ${textColor[member.color]}`}>
                  {member.role}
                </p>
                <ul className="text-xs text-slate-400 space-y-1">
                  {member.responsibilities.slice(0, 2).map((resp, idx) => (
                    <li key={idx} className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* RESORT COMPARISON */}
      <Section id="comparison" className="relative bg-slate-950/50 rounded-3xl border border-slate-900 overflow-hidden scroll-mt-20">
        {/* Background mountain image with overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src={IMAGES.stAnton.mountains}
            alt="St. Anton Mountains"
            fill
            className="object-cover"
            quality={70}
            sizes="100vw"
            loading="lazy"
          />
        </div>
        
        <div className="relative z-10">
        <div className="text-center mb-8">
          <Badge color="blue">DECISION MATRIX</Badge>
          <h2 className="text-3xl font-bold text-white mt-3">Why St. Anton?</h2>
          <p className="text-slate-400 mt-2 text-sm">Weighted analysis of top ski resorts</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="h-[350px]">
            <ResortComparisonChart />
          </div>

          <div className="space-y-3">
            {EXPEDITION_DATA.resortComparison.resorts.map((resort) => (
              <Card key={resort.name} className={resort.selected ? 'border-red-500/50 bg-red-900/10 py-2' : 'opacity-75 py-2'}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-base font-bold text-white">{resort.name}</h4>
                    <p className="text-xs text-slate-500">{resort.country}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">{resort.total}</div>
                    <div className="text-xs text-slate-500">Score</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-xs text-center">
                    <span className="text-slate-500">Terrain</span>
                    <div className="text-white font-semibold">{resort.scores.terrain}</div>
                  </div>
                  <div className="text-xs text-center">
                    <span className="text-slate-500">Snow</span>
                    <div className="text-white font-semibold">{resort.scores.snow}</div>
                  </div>
                  <div className="text-xs text-center">
                    <span className="text-slate-500">Après</span>
                    <div className="text-white font-semibold">{resort.scores.apresSki}</div>
                  </div>
                  <div className="text-xs text-center">
                    <span className="text-slate-500">Value</span>
                    <div className="text-white font-semibold">{resort.scores.value}</div>
                  </div>
                </div>

                {resort.selected && (
                  <div className="pt-2 mt-2 border-t border-slate-700">
                    <div className="flex flex-wrap gap-1">
                      {resort.pros.slice(0, 2).map((pro, idx) => (
                        <span key={idx} className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded">
                          ✓ {pro}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
        </div>
      </Section>

      {/* LOGISTICS SECTION */}
      <Section id="logistics" className="scroll-mt-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-slate-800 pb-6">
          <div>
            <Badge color="blue">DEPLOYMENT</Badge>
            <h2 className="text-3xl font-bold text-white mt-2">Operational Logistics</h2>
            <p className="text-slate-400 mt-2 text-sm">Route planning and daily execution schedule</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() => setActiveTab('route')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'route'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              Route Map
            </button>
            <button
              onClick={() => setActiveTab('daily')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'daily'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              Daily Schedule
            </button>
          </div>
        </div>

        {activeTab === 'route' ? (
          <>
            {/* SKI ARLBERG TRAIL MAP */}
            <Card className="mb-8 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <MapPinned className="text-red-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ski Arlberg Trail Map</h3>
                  <p className="text-sm text-slate-400">305km of pistes across St. Anton, St. Christoph, Lech & Zürs</p>
                </div>
              </div>
              <div className="relative h-[600px] rounded-xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <Image
                  src={IMAGES.trailMap}
                  alt="Ski Arlberg Trail Map - St. Anton am Arlberg"
                  fill
                  className="object-contain bg-slate-900"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3 text-center">
                <div className="bg-blue-900/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-400">305km</div>
                  <div className="text-xs text-slate-400">Total Pistes</div>
                </div>
                <div className="bg-green-900/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">88</div>
                  <div className="text-xs text-slate-400">Lifts</div>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">2,811m</div>
                  <div className="text-xs text-slate-400">Valluga Summit</div>
                </div>
                <div className="bg-red-900/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-red-400">200km</div>
                  <div className="text-xs text-slate-400">Off-Piste</div>
                </div>
              </div>
            </Card>

            {/* ST. ANTON SHOWCASE */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={IMAGES.stAnton.skiing}
                  alt="Skiing in St. Anton"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="text-white font-bold">Alpine Skiing</div>
                    <div className="text-xs text-slate-300">World-class terrain</div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={IMAGES.stAnton.gondola}
                  alt="St. Anton Gondola"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="text-white font-bold">Modern Lifts</div>
                    <div className="text-xs text-slate-300">88 lift facilities</div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={IMAGES.stAnton.sunset}
                  alt="St. Anton Sunset"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="text-white font-bold">Alpine Sunset</div>
                    <div className="text-xs text-slate-300">Breathtaking views</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Route className="text-blue-500" size={28} /> The Route: Budapest → St. Anton
              </h3>

              <div className="relative border-l-2 border-slate-700 ml-3 space-y-10 pl-8 py-2">
                {EXPEDITION_DATA.logistics.route.waypoints.map((waypoint, idx) => {
                  const isStart = waypoint.type === 'start';
                  const isEnd = waypoint.type === 'destination';
                  const borderColor = isStart ? 'border-green-500' : isEnd ? 'border-red-500' : 'border-slate-500';

                  return (
                    <div key={idx} className="relative">
                      <div className={`absolute -left-[41px] w-6 h-6 rounded-full bg-slate-900 border-2 ${borderColor}`}></div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-bold ${isStart || isEnd ? 'text-white text-lg' : 'text-slate-200'}`}>
                          {waypoint.name}
                        </h4>
                        {waypoint.distance && (
                          <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                            {waypoint.distance}km
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-400">{waypoint.notes}</p>
                      {waypoint.highway && (
                        <p className="text-xs text-blue-400 mt-1">via {waypoint.highway}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <Car className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{EXPEDITION_DATA.logistics.vehicle.model}</h4>
                    <p className="text-sm text-slate-400">{EXPEDITION_DATA.logistics.vehicle.capacity}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {EXPEDITION_DATA.logistics.vehicle.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={16} className="text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-xs text-slate-500">Rental Company</div>
                  <div className="text-white font-bold">{EXPEDITION_DATA.logistics.vehicle.rentalCompany}</div>
                  <div className="text-xs text-slate-400 mt-1">{EXPEDITION_DATA.logistics.vehicle.pickup.location}</div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/40 to-transparent border-blue-500/30">
                <h4 className="text-blue-300 font-bold mb-2">Total Distance</h4>
                <p className="text-4xl font-bold text-white mb-1">
                  {EXPEDITION_DATA.logistics.route.totalDistance}{' '}
                  <span className="text-lg font-normal text-slate-400">km</span>
                </p>
                <p className="text-sm text-slate-400">Est. {EXPEDITION_DATA.logistics.route.estimatedTime}</p>
                <div className="w-full bg-slate-800 h-2 mt-4 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/40 to-transparent border-green-500/30">
                <h4 className="text-green-300 font-bold mb-3">Fuel & Tolls</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Fuel Cost:</span>
                    <span className="text-white font-bold">€{EXPEDITION_DATA.logistics.route.fuelEstimate.totalCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vignettes:</span>
                    <span className="text-white font-bold">
                      €{EXPEDITION_DATA.logistics.route.vignettes.reduce((sum, v) => sum + v.cost, 0)}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-700 flex justify-between font-bold">
                    <span className="text-white">Total:</span>
                    <span className="text-green-400">
                      €{EXPEDITION_DATA.logistics.route.fuelEstimate.totalCost + EXPEDITION_DATA.logistics.route.vignettes.reduce((sum, v) => sum + v.cost, 0)}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          </>
        ) : (
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Typical Ski Day Schedule</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {EXPEDITION_DATA.activities.dailySchedule.map((item, idx) => {
                  const typeColors: { [key: string]: string } = {
                    meal: 'border-orange-500/30 bg-orange-900/10',
                    skiing: 'border-blue-500/30 bg-blue-900/10',
                    social: 'border-purple-500/30 bg-purple-900/10',
                    transport: 'border-green-500/30 bg-green-900/10',
                    break: 'border-slate-500/30 bg-slate-900/10',
                    rest: 'border-slate-600/30 bg-slate-800/10',
                  };

                  return (
                    <Card key={idx} className={`text-center ${typeColors[item.type] || ''}`}>
                      <div className="text-sm font-bold mb-2 text-red-400">{item.time}</div>
                      <div className="text-white font-bold text-sm mb-1">{item.activity}</div>
                      <div className="text-xs text-slate-400">{item.location}</div>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="glass rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Sparkles className="text-blue-400" size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Key Venues</h4>
                  <p className="text-xs text-slate-400">Dining & Après-Ski Hotspots</p>
                </div>
              </div>

              {/* Après-Ski Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-xl">
                <Image
                  src={IMAGES.activities.apresSki}
                  alt="Après-Ski in St. Anton"
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="text-white font-bold">Legendary Après-Ski</div>
                    <div className="text-xs text-slate-300">World-famous party scene</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {EXPEDITION_DATA.dining.apresSki.map((venue) => (
                  <div key={venue.name} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <h5 className="text-white font-bold mb-1">{venue.name}</h5>
                    <p className="text-xs text-slate-400 mb-3">{venue.atmosphere}</p>
                    <div className="text-xs space-y-1">
                      {venue.prices && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">Beer:</span>
                          <span className="text-orange-400 font-semibold">{venue.prices.beer}</span>
                        </div>
                      )}
                      {venue.hours.apresSki && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">Après Hours:</span>
                          <span className="text-white">{venue.hours.apresSki}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* WEATHER FORECAST SECTION */}
      <Section id="weather" className="glass border border-slate-800 rounded-3xl scroll-mt-20">
        <WeatherWidget />
      </Section>

      {/* ELEVATION PROFILE SECTION */}
      <Section id="elevation" className="bg-slate-950/50 rounded-3xl border border-slate-900 scroll-mt-20">
        <ElevationProfile />
      </Section>

      {/* TIMELINE GANTT SECTION */}
      <Section id="timeline" className="glass border border-slate-800 rounded-3xl scroll-mt-20">
        <TimelineGantt />
      </Section>

      {/* PHOTO GALLERY SECTION */}
      <Section id="gallery" className="bg-slate-950/50 rounded-3xl border border-slate-900 scroll-mt-20">
        <PhotoGallery />
      </Section>

      {/* PACKING LIST SECTION */}
      <Section id="packing" className="glass border border-slate-800 rounded-3xl scroll-mt-20">
        <PackingList />
      </Section>

      {/* BUDGET SECTION */}
      <Section id="budget" className="glass border-y border-slate-900 scroll-mt-20">
        <div className="text-center mb-6">
          <Badge color="green">FINANCIAL TRANSPARENCY</Badge>
          <h2 className="text-3xl font-bold text-white mt-3">Complete Budget Breakdown</h2>
          <p className="text-slate-400 mt-2 text-sm">Every euro accounted for</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Wallet className="text-green-500" /> Financial Overview
            </h3>
            
            <div className="space-y-4 mb-6">
              {EXPEDITION_DATA.budget.breakdown.map((category) => (
                <div key={category.category}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-semibold text-sm">{category.category}</span>
                    <span className="text-slate-400 font-bold text-sm">€{category.total}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                      style={{ width: `${(category.total / EXPEDITION_DATA.budget.totalBudget) * 100}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 ml-2 space-y-0.5">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-xs">
                        <span className="text-slate-500">• {item.name}</span>
                        <span className="text-slate-400">€{item.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-none shadow-2xl">
              <div className="grid grid-cols-2 gap-3">
                <div className="glass bg-red-900/20 rounded-lg p-3 text-center border border-red-500/30">
                  <div className="text-xs text-red-400 uppercase mb-1">Total Budget</div>
                  <div className="text-2xl font-black text-white">€{EXPEDITION_DATA.budget.totalBudget}</div>
                </div>
                <div className="glass bg-blue-900/20 rounded-lg p-3 text-center border border-blue-500/30">
                  <div className="text-xs text-blue-400 uppercase mb-1">Per Person</div>
                  <div className="text-2xl font-black text-white">€{EXPEDITION_DATA.budget.perPerson}</div>
                </div>
              </div>
              
              <div className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-green-400 uppercase mb-1">Savings vs Agency</div>
                    <div className="text-xl font-bold text-green-400">€{EXPEDITION_DATA.budget.comparison.savings}</div>
                  </div>
                  <div className="text-3xl font-black text-green-500">{EXPEDITION_DATA.budget.comparison.savingsPercent}%</div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Budget Distribution</h3>
            <BudgetDonutChart />
          </div>
        </div>

        {/* COMPARISON SLIDER */}
        <div className="mt-12">
          <ComparisonSlider />
        </div>
      </Section>

      {/* RISKS SECTION */}
      <Section id="risks" className="bg-slate-950/50 rounded-3xl border border-slate-900 scroll-mt-20">
        <div className="text-center mb-6">
          <Badge color="orange">RISK MANAGEMENT</Badge>
          <h2 className="text-3xl font-bold text-white mt-3">Risk Protocols & Mitigation</h2>
          <p className="text-slate-400 mt-2 text-sm">Comprehensive safety planning</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Risk Assessment Matrix</h3>
            <RiskHeatmapChart />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">2D Risk Visualization</h3>
            <RiskMatrix2D />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {EXPEDITION_DATA.risks.map((risk) => {
            const severityColors: { [key: string]: string } = {
              High: 'border-red-500/50 bg-red-900/10',
              Medium: 'border-orange-500/50 bg-orange-900/10',
              Low: 'border-blue-500/50 bg-blue-900/10',
            };

            const severityIcons: { [key: string]: JSX.Element } = {
              High: <AlertTriangle className="text-red-500" size={24} />,
              Medium: <ShieldAlert className="text-orange-500" size={24} />,
              Low: <CheckCircle className="text-blue-500" size={24} />,
            };

            return (
              <Card key={risk.id} className={`border-l-4 ${severityColors[risk.severity]}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="glass bg-slate-800 p-3 rounded-lg">{severityIcons[risk.severity]}</div>
                  <Badge color={risk.severity === 'High' ? 'red' : risk.severity === 'Medium' ? 'orange' : 'blue'}>
                    {risk.severity}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{risk.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{risk.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="glass bg-blue-900/20 p-2 rounded">
                    <div className="text-blue-400">Probability</div>
                    <div className="text-white font-bold">{risk.probability}%</div>
                  </div>
                  <div className="glass bg-red-900/20 p-2 rounded">
                    <div className="text-red-400">Impact</div>
                    <div className="text-white font-bold">€{risk.impact}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-slate-500 uppercase mb-2">Mitigation Strategy:</div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {risk.mitigation.slice(0, 2).map((strategy, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-green-500">✓</span>
                        <span>{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-700 text-xs">
                  <div className="text-slate-500">Responsible:</div>
                  <div className="text-white font-semibold">{risk.responsible}</div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 bg-gradient-to-br from-purple-900/20 to-violet-900/20 border-purple-500/30">
          <div className="flex items-start gap-4">
            <div className="bg-purple-500/20 p-4 rounded-lg">
              <ShieldAlert className="text-purple-400" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Insurance Coverage</h3>
              <p className="text-slate-400 mb-4">
                {EXPEDITION_DATA.insurance.provider} - {EXPEDITION_DATA.insurance.policyType}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass bg-purple-900/20 p-3 rounded">
                  <div className="text-xs text-purple-400 uppercase mb-1">Helicopter Rescue</div>
                  <div className="text-lg font-bold text-white">€{EXPEDITION_DATA.insurance.coverage.helicopterRescue.toLocaleString()}</div>
                </div>
                <div className="glass bg-purple-900/20 p-3 rounded">
                  <div className="text-xs text-purple-400 uppercase mb-1">Medical Expenses</div>
                  <div className="text-lg font-bold text-white">€{EXPEDITION_DATA.insurance.coverage.medicalExpenses.toLocaleString()}</div>
                </div>
                <div className="glass bg-purple-900/20 p-3 rounded">
                  <div className="text-xs text-purple-400 uppercase mb-1">Premium (4 people)</div>
                  <div className="text-lg font-bold text-white">€{EXPEDITION_DATA.insurance.premium.totalGroup}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section className="glass border border-slate-800 rounded-3xl scroll-mt-20">
        <Testimonials />
      </Section>

      {/* SKIING ACTIVITIES GALLERY */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-950 scroll-mt-20">
        <div className="text-center mb-10">
          <Badge color="red">ON THE SLOPES</Badge>
          <h2 className="text-3xl font-bold text-white mt-3">Experience St. Anton</h2>
          <p className="text-slate-400 mt-2 text-sm">Premium skiing and legendary après-ski culture</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src={IMAGES.activities.snowboarding}
              alt="Snowboarding in St. Anton"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end">
              <div className="p-6 w-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Snowflake className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Powder Paradise</h3>
                    <p className="text-sm text-slate-300">305km of pristine pistes</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">
                  From gentle blues to challenging blacks, St. Anton offers terrain for every skill level with legendary off-piste opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src={IMAGES.activities.skiGroup}
              alt="Ski Group in St. Anton"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end">
              <div className="p-6 w-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Users className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Team Adventure</h3>
                    <p className="text-sm text-slate-300">Guided by local expertise</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">
                  Professional ski school, group lessons, and guided tours available. Explore hidden powder stashes with certified mountain guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* EMERGENCY CONTACTS */}
      <Section id="emergency" className="glass rounded-3xl border border-red-500/30 bg-red-900/5 scroll-mt-20">
        <div className="text-center mb-10">
          <Badge color="red">SAFETY FIRST</Badge>
          <h2 className="text-3xl font-bold text-white mt-3">Emergency Contacts</h2>
          <p className="text-slate-400 mt-2 text-sm">Critical numbers - save before departure</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-red-900/20 border-red-500/30">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Phone className="text-red-500" size={20} />
              Austrian Emergency Services
            </h3>
            <div className="space-y-3">
              {EXPEDITION_DATA.emergencyContacts.austria.map((contact) => (
                <div key={contact.service} className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">{contact.service}</span>
                  <a
                    href={`tel:${contact.number}`}
                    className="text-red-400 font-bold text-lg hover:text-red-300"
                  >
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-blue-900/20 border-blue-500/30">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="text-blue-500" size={20} />
              Nearest Hospitals
            </h3>
            <div className="space-y-4">
              {EXPEDITION_DATA.emergencyContacts.hospitals.map((hospital) => (
                <div key={hospital.name}>
                  <h4 className="text-white font-semibold text-sm mb-1">{hospital.name}</h4>
                  <p className="text-xs text-slate-400 mb-1">{hospital.distance}</p>
                  <a
                    href={`tel:${hospital.phone}`}
                    className="text-blue-400 text-sm hover:text-blue-300"
                  >
                    {hospital.phone}
                  </a>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-purple-900/20 border-purple-500/30">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="text-purple-500" size={20} />
              {EXPEDITION_DATA.emergencyContacts.embassy.name}
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <div className="text-slate-500 text-xs">Address:</div>
                <div className="text-slate-300">{EXPEDITION_DATA.emergencyContacts.embassy.address}</div>
              </div>
              <div>
                <div className="text-slate-500 text-xs">Phone:</div>
                <a href={`tel:${EXPEDITION_DATA.emergencyContacts.embassy.phone}`} className="text-purple-400 hover:text-purple-300">
                  {EXPEDITION_DATA.emergencyContacts.embassy.phone}
                </a>
              </div>
              <div>
                <div className="text-slate-500 text-xs">Email:</div>
                <a href={`mailto:${EXPEDITION_DATA.emergencyContacts.embassy.email}`} className="text-purple-400 hover:text-purple-300 break-all">
                  {EXPEDITION_DATA.emergencyContacts.embassy.email}
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* PROJECT MANAGEMENT SECTION */}
      <Section id="project-management" className="scroll-mt-20">
        <div className="text-center mb-12">
          <Badge color="purple">Project Management Framework</Badge>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">
            Academic Project Planning
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Comprehensive project management methodology including WBS, PERT/CPM analysis, KPIs, control points, and vendor selection process
          </p>
        </div>

        {/* WBS - Work Breakdown Structure */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Network size={20} className="text-red-400" />
              </div>
              Work Breakdown Structure (WBS)
            </h3>
            <p className="text-slate-400">
              Hierarchical decomposition of all project tasks from planning through closure
            </p>
          </div>
          <Card className="bg-slate-900/50 border-slate-800">
            <WBSTree />
          </Card>
        </div>

        {/* Gantt Chart */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Calendar size={20} className="text-blue-400" />
              </div>
              Gantt Chart & Timeline
            </h3>
            <p className="text-slate-400">
              Complete project schedule with task dependencies and critical path identification
            </p>
          </div>
          <Card className="bg-slate-900/50 border-slate-800">
            <GanttTimeline />
          </Card>
        </div>

        {/* PERT/CPM Network Planning */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <GitBranch size={20} className="text-purple-400" />
              </div>
              PERT/CPM Network Planning
            </h3>
            <p className="text-slate-400">
              Program Evaluation and Review Technique with Critical Path Method for time optimization
            </p>
          </div>
          <Card className="bg-slate-900/50 border-slate-800">
            <PERTAnalysis />
          </Card>
        </div>

        {/* KPIs & Success Metrics */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Target size={20} className="text-green-400" />
              </div>
              Key Performance Indicators (KPIs)
            </h3>
            <p className="text-slate-400">
              Measurable success criteria across financial, schedule, safety, quality, and operational dimensions
            </p>
          </div>
          <Card className="bg-slate-900/50 border-slate-800">
            <KPIDashboard />
          </Card>
        </div>

        {/* Control Points */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <CheckCircle size={20} className="text-yellow-400" />
              </div>
              Project Control Points & Milestones
            </h3>
            <p className="text-slate-400">
              Gate approvals and monitoring checkpoints throughout project lifecycle
            </p>
          </div>
          <Card className="bg-slate-900/50 border-slate-800">
            <ControlPointsTimeline />
          </Card>
        </div>

        {/* Vendor Analysis */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <TrendingUp size={20} className="text-orange-400" />
              </div>
              Competitive Bidding & Vendor Selection
            </h3>
            <p className="text-slate-400">
              Multi-criteria decision analysis for procurement of vehicle, accommodation, equipment, and insurance
            </p>
          </div>
          <Card className="bg-slate-900/50 border-slate-800">
            <VendorComparison />
          </Card>
        </div>

        {/* Project Management Summary */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-red-950/30 to-red-900/20 border-red-500/50">
            <div className="text-red-400 text-sm font-semibold mb-2">Planning Methodology</div>
            <div className="text-white text-lg font-bold mb-2">Waterfall + Agile Hybrid</div>
            <div className="text-slate-300 text-sm">
              Structured planning phase with flexible execution adjustments
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-950/30 to-blue-900/20 border-blue-500/50">
            <div className="text-blue-400 text-sm font-semibold mb-2">Risk Management</div>
            <div className="text-white text-lg font-bold mb-2">5 Major Risks Identified</div>
            <div className="text-slate-300 text-sm">
              Comprehensive mitigation strategies with assigned owners
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-950/30 to-green-900/20 border-green-500/50">
            <div className="text-green-400 text-sm font-semibold mb-2">Success Probability</div>
            <div className="text-white text-lg font-bold mb-2">86% within 44 days</div>
            <div className="text-slate-300 text-sm">
              PERT analysis with 3-point estimation methodology
            </div>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-900 mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 font-bold text-xl text-slate-700 tracking-tighter mb-4">
            <div className="relative w-10 h-10">
              <Image
                src={IMAGES.logo}
                alt="St. Anton Österreich"
                fill
                className="object-contain"
              />
            </div>
            <span>ST. ANTON ÖSTERREICH</span>
          </div>
          <p className="text-slate-600 text-sm">
            © 2026 St. Anton am Arlberg Ski Resort. All Rights Reserved.
          </p>
          <p className="text-slate-800 text-xs mt-2 font-mono">{EXPEDITION_DATA.project.code}</p>
          <p className="text-slate-700 text-xs mt-4">
            Team: {EXPEDITION_DATA.team.map((m) => m.name).join(', ')}
          </p>
        </div>
      </footer>
    </main>
  );
}
