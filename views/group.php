<div
    class="Dashboard__panel Dashboard__group"
    data-size="<?= $size ?>"
    data-align="<?= $align ?>"
    data-margin="<?= $margin ? 'true' : 'false' ?>"
>

    <?php if ($title): ?>
        <h2 class="Dashboard__group__title">
            <?= $icon ?> <?= $title ?>
        </h2>
    <?php endif; ?>

    <?php if (count($children)): ?>
        <div class="Dashboard__grid Dashboard__group__content">
            <?php foreach ($children as $markup): ?>
                <?= $markup ?>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>

</div>
