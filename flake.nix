{
  description = "shell convert flake";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShell = pkgs.mkShell {
        name = "shell-convert";

        buildInputs = with pkgs; [
          nodejs
        ];
      };
    }
  );
}
