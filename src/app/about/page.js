'use client'
export default function Page() {
  'use client'
  const fetchUsers = async() => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ name: "B", email: "Aa222222@qq.com", password: 'Aa222222', role: 'test' }),
    })
    if (res.ok) {
      const result = await res.json()
      console.log('>>>>', result)
    }
    
  };

  const getAllUsers = async() => {
    const res = await fetch('/api/users')
    if (res.ok) {
      const result = await res.json()
      console.log('>>>>', result)
    }
    
  };
  
  return (
    <div>
      <div onClick={fetchUsers}>Login</div>
      <div onClick={getAllUsers}>getALL</div>
    </div>
  );
}