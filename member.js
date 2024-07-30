function skillsMember(){
    return{
        restrict: 'E',
        templateURL: 'module/skills/view/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}