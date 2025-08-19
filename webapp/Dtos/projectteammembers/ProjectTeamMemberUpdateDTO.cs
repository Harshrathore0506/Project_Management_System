using System;
using webapp.Models;

namespace webapp.DTOs.ProjectTeamMembers
{
    public class ProjectTeamMemberUpdateDTO
    {
        public int Id { get; set; } // Required to identify which team member to update
        public ProjectTeamRole? Role { get; set; }
        public DateTime? AssignedAt { get; set; } // Optional, can update assigned date
    }
}
