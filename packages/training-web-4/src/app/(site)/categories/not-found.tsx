export default async function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', border: '2px solid red' }}>
      <h1 style={{ color: 'red' }}>🚫 Categories Not Found</h1>
      <p>このページは存在しません（categories/not-found.tsx が表示されています）</p>
      <p>テスト成功！ 🎉</p>
    </div>
  );
}
