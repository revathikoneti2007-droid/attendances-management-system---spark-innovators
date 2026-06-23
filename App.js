import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const [email, setEmail] = useState('');
  
  const [students, setStudents] = useState([
    { id: 1, name: 'A. Gang', rollNo: '1', status: null },
    { id: 2, name: 'K. Sylusha', rollNo: '2', status: null },
    { id: 3, name: 'A. Deepika', rollNo: '3', status: null },
    { id: 4, name: 'A. Pavani', rollNo: '4', status: null },
    { id: 5, name: 'B. Pujitha', rollNo: '5', status: null },
    { id: 6, name: 'D. Sai', rollNo: '6', status: null },
    { id: 7, name: 'G. Bhanu', rollNo: '7', status: null },
    { id: 8, name: 'J. Harini', rollNo: '8', status: null },
    { id: 9, name: 'K. Poorina', rollNo: '9', status: null },
    { id: 10, name: 'K. Revathi', rollNo: '10', status: null },
    { id: 11, name: 'K. Akhansha', rollNo: '11', status: null },
    { id: 12, name: 'K. Rishika', rollNo: '12', status: null },
    { id: 13, name: 'K. Mounika', rollNo: '13', status: null },
    { id: 14, name: 'K. Harshitha', rollNo: '14', status: null },
    { id: 15, name: 'M. Charanya', rollNo: '15', status: null },
    { id: 16, name: 'MD. Shabana', rollNo: '16', status: null },
    { id: 17, name: 'M. Gangapavani', rollNo: '17', status: null },
    { id: 18, name: 'N. Sai Nirisha', rollNo: '18', status: null },
    { id: 19, name: 'N. Uma Krishnaveni', rollNo: '19', status: null },
    { id: 20, name: 'P. Sanjana', rollNo: '20', status: null },
    { id: 21, name: 'P. Tejaswi', rollNo: '21', status: null },
    { id: 22, name: 'P. Cherishma', rollNo: '22', status: null },
    { id: 23, name: 'R. Jaya', rollNo: '23', status: null },
    { id: 24, name: 'T. Githanvitha', rollNo: '24', status: null },
    { id: 25, name: 'V. Hasini', rollNo: '25', status: null },
    { id: 26, name: 'B. Supriya', rollNo: '26', status: null },
    { id: 27, name: 'B. Sasi', rollNo: '27', status: null },
    { id: 28, name: 'B. Ratna Bala', rollNo: '28', status: null },
    { id: 29, name: 'Y. Tejaswini', rollNo: '29', status: null },
    { id: 30, name: 'K. Akshitha', rollNo: '30', status: null },
    { id: 31, name: 'A. Deepthi', rollNo: '31', status: null },
    { id: 32, name: 'M. Drashini', rollNo: '32', status: null },
  ]);
  
  const [showReport, setShowReport] = useState(false);

  const markAttendance = (id, status) => {
    setStudents(students.map(s => s.id === id ? { ...s, status } : s));
  };

  const presentCount = students.filter(s => s.status === 'Present').length;
  const absentCount = students.filter(s => s.status === 'Absent').length;
  const percentage = students.length > 0 ? ((presentCount / students.length) * 100).toFixed(1) : 0;

  if (page === 'home') {
    return (
      <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Segoe UI, sans-serif'}}>
        <div style={{background: 'white', padding: '50px', borderRadius: '20px', textAlign: 'center', maxWidth: '550px', boxShadow: '0 25px 50px rgba(0,0,0,0.3)'}}>
          <div style={{fontSize: '70px', marginBottom: '20px'}}>🎓</div>
          <h1 style={{fontSize: '52px', fontWeight: '900', background: 'linear-gradient(90deg, #1e40af, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 12px 0'}}>AttendPro</h1>
          <p style={{fontSize: '20px', color: '#475569', marginBottom: '35px', fontWeight: '600'}}>Smart Attendance Management System</p>
          <div style={{background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', padding: '30px', borderRadius: '16px', textAlign: 'left', marginBottom: '35px', border: '2px solid #bfdbfe'}}>
            <p style={{fontWeight: '800', color: '#1e3a8a', fontSize: '18px', margin: '0 0 15px 0'}}>🎓 Core Features:</p>
            <p style={{margin: '10px 0', color: '#1e40af', fontSize: '15px'}}>✓ Real-Time Attendance Dashboard</p>
            <p style={{margin: '10px 0', color: '#1e40af', fontSize: '15px'}}>✓ Automated Analytics & Reports</p>
            <p style={{margin: '10px 0', color: '#1e40af', fontSize: '15px'}}>✓ QR Code Integration - Phase 2</p>
            <p style={{margin: '10px 0', color: '#1e40af', fontSize: '15px'}}>✓ Class Strength: {students.length} Students</p>
          </div>
          <button onClick={() => setPage('login')} style={{background: 'linear-gradient(90deg, #1e40af, #2563eb)', color: 'white', border: 'none', padding: '16px 40px', borderRadius: '14px', fontSize: '17px', fontWeight: '700', cursor: 'pointer', width: '100%', boxShadow: '0 10px 25px rgba(30, 64, 175, 0.4)'}}>
            Access Attendance Console →
          </button>
          <p style={{fontSize: '13px', color: '#94a3b8', marginTop: '30px'}}>AttendPro v3.0 | Professional Edition</p>
        </div>
      </div>
    );
  }

  if (page === 'login') {
    return (
      <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Segoe UI, sans-serif'}}>
        <div style={{background: 'white', padding: '50px', borderRadius: '20px', maxWidth: '450px', width: '100%', boxShadow: '0 25px 50px rgba(0,0,0,0.3)'}}>
          <button onClick={() => setPage('home')} style={{background: 'none', border: 'none', color: '#1e40af', fontWeight: '700', cursor: 'pointer', marginBottom: '25px', fontSize: '16px'}}>← Return to Home</button>
          <h2 style={{fontSize: '32px', color: '#0f172a', marginBottom: '10px', fontWeight: '800'}}>Faculty Portal</h2>
          <p style={{color: '#64748b', marginBottom: '35px', fontSize: '16px'}}>Authenticate to access Attendance Console</p>
          <input 
            type="email" 
            placeholder="faculty@institution.edu" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width: '100%', padding: '16px', border: '2px solid #e2e8f0', borderRadius: '12px', fontSize: '16px', marginBottom: '30px', boxSizing: 'border-box', outline: 'none', transition: '0.3s'}}
            onFocus={(e) => e.target.style.borderColor = '#2563eb'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
          <button 
            onClick={() => setPage('dashboard')}
            disabled={!email}
            style={{background: email ? 'linear-gradient(90deg, #1e40af, #2563eb)' : '#cbd5e1', color: 'white', border: 'none', padding: '16px 40px', borderRadius: '12px', fontSize: '16px', fontWeight: '700', cursor: email ? 'pointer' : 'not-allowed', width: '100%', boxShadow: email ? '0 10px 25px rgba(30, 64, 175, 0.4)' : 'none'}}
          >
            Enter Console
          </button>
          <div style={{background: '#eff6ff', padding: '18px', borderRadius: '12px', marginTop: '30px', border: '2px solid #bfdbfe'}}>
            <p style={{fontSize: '14px', color: '#1e3a8a', margin: 0, fontWeight: '600'}}>🔐 Secure Access: Demo mode active. Full authentication in Phase 2.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{background: '#f1f5f9', minHeight: '100vh', padding: '25px', fontFamily: 'Segoe UI, sans-serif'}}>
      <div style={{maxWidth: '1400px', margin: 'auto'}}>
        <div style={{background: 'white', padding: '35px', borderRadius: '16px', marginBottom: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>
            <div>
              <h1 style={{margin: 0, fontSize: '30px', color: '#0f172a', fontWeight: '900'}}>Attendance Console</h1>
              <p style={{margin: '10px 0 0 0', color: '#64748b', fontSize: '15px', fontWeight: '500'}}>Class Strength: {students.length} | {new Date().toLocaleDateString('en-IN', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})} | Faculty: {email}</p>
            </div>
            <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
              <button onClick={() => setShowReport(true)} style={{background: '#1e40af', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '15px', boxShadow: '0 4px 12px rgba(30, 64, 175, 0.3)'}}>📊 Generate Report</button>
              <button onClick={() => alert('QR Scanner - Phase 2 with Camera API Integration')} style={{background: '#475569', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '15px', boxShadow: '0 4px 12px rgba(71, 85, 105, 0.3)'}}>📱 QR Scanner</button>
              <button onClick={() => {setPage('home'); setEmail('');}} style={{background: '#64748b', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '15px'}}>Logout</button>
            </div>
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '25px'}}>
          <div style={{background: 'linear-gradient(135deg, #1e40af, #1e3a8a)', padding: '30px', borderRadius: '16px', color: 'white', boxShadow: '0 8px 20px rgba(30, 64, 175, 0.3)'}}>
            <p style={{margin: 0, fontSize: '15px', opacity: 0.9, fontWeight: '600'}}>Total Enrollment</p>
            <h2 style={{margin: '12px 0 0 0', fontSize: '44px', fontWeight: '900'}}>{students.length}</h2>
          </div>
          <div style={{background: 'linear-gradient(135deg, #059669, #047857)', padding: '30px', borderRadius: '16px', color: 'white', boxShadow: '0 8px 20px rgba(5, 150, 105, 0.3)'}}>
            <p style={{margin: 0, fontSize: '15px', opacity: 0.9, fontWeight: '600'}}>Present Today</p>
            <h2 style={{margin: '12px 0 0 0', fontSize: '44px', fontWeight: '900'}}>{presentCount}</h2>
          </div>
          <div style={{background: 'linear-gradient(135deg, #dc2626, #b91c1c)', padding: '30px', borderRadius: '16px', color: 'white', boxShadow: '0 8px 20px rgba(220, 38, 0.3)'}}>
            <p style={{margin: 0, fontSize: '15px', opacity: 0.9, fontWeight: '600'}}>Absent Today</p>
            <h2 style={{margin: '12px 0 0 0', fontSize: '44px', fontWeight: '900'}}>{absentCount}</h2>
          </div>
          <div style={{background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', padding: '30px', borderRadius: '16px', color: 'white', boxShadow: '0 8px 20px rgba(37, 99, 235, 0.3)'}}>
            <p style={{margin: 0, fontSize: '15px', opacity: 0.9, fontWeight: '600'}}>Attendance Rate</p>
            <h2 style={{margin: '12px 0 0 0', fontSize: '44px', fontWeight: '900'}}>{percentage}%</h2>
          </div>
        </div>

        <div style={{background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px'}}>
            <h3 style={{margin: 0, fontSize: '22px', color: '#0f172a', fontWeight: '800'}}>Student Attendance Register</h3>
          </div>
          <div style={{maxHeight: '550px', overflowY: 'auto'}}>
            {students.map((student) => (
              <div key={student.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px', border: '2px solid #f1f5f9', borderRadius: '14px', marginBottom: '14px', background: student.status ? '#f8fafc' : 'white', transition: '0.3s'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                  <div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e40af, #2563eb)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '18px', boxShadow: '0 4px 12px rgba(30, 64, 175, 0.3)'}}>
                    {student.rollNo}
                  </div>
                  <div>
                    <p style={{margin: 0, fontWeight: '800', color: '#0f172a', fontSize: '16px'}}>{student.name}</p>
                    <p style={{margin: '4px 0 0 0', fontSize: '14px', color: '#64748b', fontWeight: '600'}}>Roll No: {student.rollNo} | Status: <b style={{color: student.status === 'Present' ? '#059669' : student.status === 'Absent' ? '#dc2626' : '#94a3b8'}}>{student.status || 'Unmarked'}</b></p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                  <button onClick={() => markAttendance(student.id, 'Present')} style={{padding: '11px 26px', background: student.status === 'Present' ? '#059669' : '#f1f5f9', color: student.status === 'Present' ? 'white' : '#475569', border: student.status === 'Present' ? 'none' : '2px solid #e2e8f0', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '14px'}}>✓ Present</button>
                  <button onClick={() => markAttendance(student.id, 'Absent')} style={{padding: '11px 26px', background: student.status === 'Absent' ? '#dc2626' : '#f1f5f9', color: student.status === 'Absent' ? 'white' : '#475569', border: student.status === 'Absent' ? 'none' : '2px solid #e2e8f0', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', fontSize: '14px'}}>✗ Absent</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showReport && (
          <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px'}} onClick={() => setShowReport(false)}>
            <div style={{background: 'white', padding: '45px', borderRadius: '20px', maxWidth: '750px', width: '90%', maxHeight: '85vh', overflowY: 'auto'}} onClick={(e) => e.stopPropagation()}>
              <h2 style={{margin: '0 0 30px 0', color: '#0f172a', fontSize: '28px', fontWeight: '900'}}>📊 Comprehensive Attendance Report</h2>
              <div style={{background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', padding: '28px', borderRadius: '16px', marginBottom: '30px', border: '2px solid #bfdbfe'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', fontSize: '15px'}}>
                  <p style={{margin: 0}}><b>Report Date:</b> {new Date().toLocaleDateString('en-IN')}</p>
                  <p style={{margin: 0}}><b>Class:</b> Attendance Console</p>
                  <p style={{margin: 0}}><b>Total Strength:</b> {students.length} Students</p>
                  <p style={{margin: 0}}><b>Present Count:</b> {presentCount}</p>
                  <p style={{margin: 0}}><b>Absent Count:</b> {absentCount}</p>
                  <p style={{margin: 0}}><b>Attendance Rate:</b> {percentage}%</p>
                </div>
              </div>
              <h4 style={{color: '#0f172a', marginBottom: '18px', fontSize: '18px', fontWeight: '800'}}>Individual Student Records:</h4>
              <div style={{maxHeight: '320px', overflowY: 'auto', border: '2px solid #e2e8f0', borderRadius: '12px', padding: '15px'}}>
                {students.map(s => (
                  <div key={s.id} style={{margin: '10px 0', padding: '14px', background: s.status === 'Present' ? '#f0fdf4' : s.status === 'Absent' ? '#fef2f2' : '#f8fafc', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', border: '1px solid ' + (s.status === 'Present' ? '#bbf7d0' : s.status === 'Absent' ? '#fecaca' : '#e2e8f0')}}>
                    <span style={{fontWeight: '600'}}><b>{s.rollNo}</b> - {s.name}</span>
                    <span style={{fontWeight: '800', color: s.status === 'Present' ? '#059669' : s.status === 'Absent' ? '#dc2626' : '#94a3b8'}}>{s.status || 'Unmarked'}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setShowReport(false)} style={{background: 'linear-gradient(90deg, #1e40af, #2563eb)', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '12px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', width: '100%', marginTop: '30px', boxShadow: '0 10px 25px rgba(30, 64, 175, 0.4)'}}>Close Report</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
