# 說明
a96g: 家裡主機

# 主機連線別名

# 家裡主機
alias a96g='ssh -p 2023 wa@home.nodered.vip'
alias a96g-mgr='ssh -p 2023 wa@home.nodered.vip'
alias a96g-nfs='ssh -p 2024 wa@home.nodered.vip'

# 重新部署流程
以 claude-web 為例：

1. 連接到 a96g 伺服器
```bash
ssh -p 2023 wa@home.nodered.vip
```

2. 備份現有配置文件
```bash
ssh -p 2023 wa@home.nodered.vip "cd /home/wa/a96g/internal && cp claude-web.yaml claude-web.yaml_backup_$(date +%Y-%m-%d_%H-%M-%S)"
```

3. 複製新的 yaml 文件到遠端主機
```bash
scp -P 2023 ./pve/a96g/internal/claude-web.yaml wa@home.nodered.vip:/home/wa/a96g/internal/
```

4. 應用新的配置
```bash
ssh -p 2023 wa@home.nodered.vip "kubectl apply -f /home/wa/a96g/internal/claude-web.yaml"
```

5. 檢查部署狀態
```bash
ssh -p 2023 wa@home.nodered.vip "kubectl rollout status deployment/claude-web -n internal"
```

6. 驗證 Pod 運行狀態
```bash
ssh -p 2023 wa@home.nodered.vip "kubectl get pods -n internal | grep claude-web"
```
