## Notification App Backend
## Stage 1
# Campus Notifications Microservices
# Core actions:
- Create notification
- Send notification
- Receive notification
- Mark as read
- Delete notification

# REST APIs design
- POST /api/notifications
- GET /api/notifications
- GET /api/notifications/:id
- PATCH /api/notifications/:id/read
- DELETE /api/notifications/:id
- POST /api/notifications/send

# JSON schema

```json

{
    "title": ,
    "message": ,
    "type": ,
    "target": ,
    "sent": ,
    "readAt": ,
    "expiresAt": 
}