module.exports = {
  apps: [
    {
      name: 'stock-edge-alert',      
      script: 'npm',
      args: 'run start:web',
      instances: 1, 
      exec_mode: "cluster",      
      watch: '.',
      autorestart: true,
      max_restarts: 20,
      max_memory_restart: "200M",    
    },
    {
      name: 'server',
      script: "./src/server/index.js",
      instances: 1,
      exec_mode: 'fork',      
      watch: false,
      autorestart: false
    }    
  ]
};
