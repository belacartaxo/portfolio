import React, { useEffect, useState, useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // carrega tsparticles-slim
//import { loadFull } from "tsparticles"; // carrega tsparticles

interface CoverProps {
  id: string;
}

const Cover: React.FC<CoverProps> = (props) => {
  // usando useMemo para memoizar opções estáticas
  const options = useMemo(() => {
    return {
      background: {
        color: "#000", // define uma cor de fundo para o canvas
      },
      fullScreen: {
        enable: true, // ativa o canvas em tela cheia
        zIndex: -1, // define o z-index quando a tela cheia está ativa
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // ativa o evento de clique
            mode: "push", // adiciona partículas ao clicar
          },
          onHover: {
            enable: true, // ativa o evento de hover
            mode: "repulse", // faz as partículas se afastarem do cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // número de partículas adicionadas ao clicar
          },
          repulse: {
            distance: 100, // distância das partículas em relação ao cursor
          },
        },
      },
      particles: {
        links: {
          enable: true, // ativa a conexão entre as partículas
          distance: 200, // distância máxima para conectar partículas
        },
        move: {
          enable: true, // ativa o movimento das partículas
          speed: { min: 1, max: 5 }, // define uma velocidade aleatória entre os valores mínimo e máximo
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // define opacidades diferentes para criar efeito semitransparente
        },
        size: {
          value: { min: 1, max: 3 }, // randomiza o tamanho das partículas
        },
      },
    };
  }, []);

  // memoização de callback para inicialização das partículas
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
    // await loadFull(engine); // para esse exemplo, a versão slim é suficiente
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default Cover;
