﻿using Microsoft.EntityFrameworkCore;

namespace mixdrop_back.Models;

[Index(nameof(Email), IsUnique = true)]
[Index(nameof(Nickname), IsUnique = true)]
public class User
{
    public int Id { get; set; }
    public string Nickname { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Role { get; set; }
    public string AvatarPath { get; set; }
    public bool IsInQueue { get; set; }
    public int StateId { get; set; }
    public State State { get; set; }
    public ICollection<UserFriend> UserFriends { get; set; }
    public ICollection<UserBattle> BattleUsers { get; set; } = new List<UserBattle>();
}